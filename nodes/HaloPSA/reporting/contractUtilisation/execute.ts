import { IExecuteFunctions, NodeOperationError } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../transport';
import { inspectSql } from '../../sqlGuard';
import { extractReportRows } from '../reportRows';

function defaultPeriodUtc(): { start: string; end: string } {
	const now = new Date();
	const start = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1, 0, 0, 0));
	const end = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1, 0, 0, 0));
	return {
		start: start.toISOString().replace(/\.\d{3}Z$/, 'Z'),
		end: end.toISOString().replace(/\.\d{3}Z$/, 'Z'),
	};
}

function formatUtcParam(value: string | Date | undefined, fallback: string): string {
	if (value === undefined || value === null || value === '') {
		return fallback;
	}
	const iso = value instanceof Date ? value.toISOString() : String(value).trim();
	const normalized = iso.replace(/\.\d{3}Z$/, 'Z');
	if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/i.test(normalized)) {
		throw new Error(`Invalid UTC datetime: ${iso}`);
	}
	return normalized;
}

function buildUtilisationSql(start: string, end: string, clientId: number, limit: number): string {
	const rowLimit = Math.min(Math.max(Math.floor(limit), 1), 500);
	const clientFilter = clientId > 0 ? ` AND f.Areaint = ${Math.floor(clientId)}` : '';

	return `SELECT TOP ${rowLimit}
    f.Areaint                       AS client_id,
    a.aareadesc                     AS client_name,
    ABS(ac.ActionContractID)        AS contract_id,
    ROUND(SUM(ac.ActionChargeHours), 2) AS charge_hours,
    COUNT(DISTINCT ac.Faultid)      AS ticket_count,
    COUNT(*)                        AS action_count
FROM ACTIONS ac
INNER JOIN FAULTS f ON ac.Faultid = f.Faultid
INNER JOIN AREA   a ON a.Aarea     = f.Areaint
WHERE ac.Whe_ >= '${start}'
  AND ac.Whe_ <  '${end}'
  AND ac.ActionContractID < 0
  AND ac.ActionChargeHours > 0
  AND f.FDeleted = 'False'${clientFilter}
GROUP BY f.Areaint, a.aareadesc, ac.ActionContractID
ORDER BY charge_hours DESC`;
}

function buildEntitlementLookups(contractsResponse: unknown): {
	byContract: Map<number, number>;
	byClient: Map<number, number>;
} {
	const byContract = new Map<number, number>();
	const byClient = new Map<number, number>();

	const list = Array.isArray(contractsResponse)
		? contractsResponse
		: (contractsResponse as IDataObject)?.contracts;

	if (!Array.isArray(list)) {
		return { byContract, byClient };
	}

	for (const c of list) {
		const row = c as IDataObject;
		const hrs = typeof row.numberofunitsfree === 'number' ? row.numberofunitsfree : 0;
		const contractId = row.id as number | undefined;
		const cid = row.client_id as number | undefined;

		if (contractId !== undefined) {
			byContract.set(contractId, hrs);
		}
		if (cid !== undefined) {
			byClient.set(cid, (byClient.get(cid) ?? 0) + hrs);
		}
	}

	return { byContract, byClient };
}

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const defaults = defaultPeriodUtc();
	const startParam = this.getNodeParameter('startDate', index, '') as string | Date;
	const endParam = this.getNodeParameter('endDate', index, '') as string | Date;
	const clientId = this.getNodeParameter('clientId', index, 0) as number;
	const limit = this.getNodeParameter('limit', index, 100) as number;

	let start: string;
	let end: string;
	try {
		start = formatUtcParam(startParam, defaults.start);
		end = formatUtcParam(endParam, defaults.end);
	} catch (error) {
		throw new NodeOperationError(
			this.getNode(),
			error instanceof Error ? error.message : 'Invalid date',
			{ itemIndex: index },
		);
	}

	const sql = buildUtilisationSql(start, end, clientId, limit);
	const guard = inspectSql(sql);
	if (!guard.ok) {
		throw new NodeOperationError(this.getNode(), new Error(guard.reason), { itemIndex: index });
	}

	const hoursResponse = await apiRequest.call(
		this,
		'POST',
		'/Report',
		[{ _loadreportonly: true, sql }],
		{},
	);

	const contractQs: IDataObject = { count: 100 };
	if (clientId > 0) {
		contractQs.client_id = clientId;
	}
	const contractsResponse = await apiRequest.call(this, 'GET', '/ClientContract', {}, contractQs);

	const { byContract, byClient } = buildEntitlementLookups(contractsResponse);
	const hourRows = extractReportRows(hoursResponse);

	const items: INodeExecutionData[] = hourRows.map((row) => {
		const cid = Number(row.client_id ?? 0);
		const contractId = Number(row.contract_id ?? 0);
		const charged = Number(row.charge_hours ?? 0);
		const tickets = Number(row.ticket_count ?? 0);
		const actions = Number(row.action_count ?? 0);

		let entitled: number | undefined = byContract.get(contractId);
		if (entitled === undefined) {
			entitled = byClient.get(cid);
		}

		const overage =
			entitled !== undefined ? Math.max(0, charged - entitled) : undefined;

		return {
			json: {
				period_start_utc: start,
				period_end_utc: end,
				client_id: cid,
				client_name: row.client_name ?? '',
				contract_id: contractId,
				charge_hours: Math.round(charged * 100) / 100,
				contracted_hours:
					entitled !== undefined ? Math.round(entitled * 100) / 100 : null,
				overage_hours:
					overage !== undefined ? Math.round(overage * 100) / 100 : null,
				over_budget: overage !== undefined ? overage > 0 : null,
				ticket_count: tickets,
				action_count: actions,
				has_contract: entitled !== undefined,
			} as IDataObject,
			pairedItem: { item: index },
		};
	});

	if (items.length === 0) {
		return [
			{
				json: {
					period_start_utc: start,
					period_end_utc: end,
					row_count: 0,
					source:
						'ACTIONS.ActionChargeHours WHERE ActionContractID < 0 (negative = linked agreement)',
				},
				pairedItem: { item: index },
			},
		];
	}

	return items;
}
