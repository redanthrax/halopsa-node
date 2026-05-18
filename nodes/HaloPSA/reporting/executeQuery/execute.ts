import { IExecuteFunctions, NodeOperationError } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../transport';
import { inspectSql } from '../../sqlGuard';
import { extractReportRows } from '../reportRows';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const sql = this.getNodeParameter('sql', index) as string;
	const guard = inspectSql(sql);
	if (!guard.ok) {
		throw new NodeOperationError(this.getNode(), new Error(guard.reason), {
			itemIndex: index,
		});
	}

	const body = [{ _loadreportonly: true, sql }];
	const response = await apiRequest.call(this, 'POST', '/Report', body, {});

	const rows = extractReportRows(response);
	if (rows.length === 0) {
		const meta: IDataObject = { row_count: 0 };
		if (response !== undefined && response !== null) {
			meta.raw_response = response;
		}
		return [{ json: meta, pairedItem: { item: index } }];
	}

	return rows.map((row) => ({
		json: row,
		pairedItem: { item: index },
	}));
}
