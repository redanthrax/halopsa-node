import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import {
	applyFieldsToBody,
	normalizeCustomfieldsField,
	resolveUpdateFields,
} from '../../../filterParameters';
import { HaloTicketDetailed } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index) as number;
	const updateFields = resolveUpdateFields.call(this, index);
	normalizeCustomfieldsField(updateFields);

	const normalizedUpdate: IDataObject = { ...updateFields };

	const parseOptionalId = (value: string | number | undefined): number | undefined => {
		if (value === undefined || value === '') {
			return undefined;
		}
		const parsed = typeof value === 'string' ? parseInt(value, 10) : value;
		return isNaN(parsed) ? undefined : parsed;
	};

	for (const key of ['client_id', 'site_id', 'user_id', 'agent_id', 'status_id'] as const) {
		const parsed = parseOptionalId(normalizedUpdate[key] as string | number | undefined);
		if (parsed !== undefined) {
			normalizedUpdate[key] = parsed;
		}
	}

	const ticketData: IDataObject = {
		id: ticketId,
	};

	applyFieldsToBody(ticketData, normalizedUpdate);

	const requestMethod = 'POST';
	const endpoint = '/Tickets';

	const body = [ticketData];

	const responseData: HaloTicketDetailed[] = await apiRequest.call(this, requestMethod, endpoint, body, {});

	return this.helpers.returnJsonArray(responseData);
}
