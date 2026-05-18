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
	if (normalizedUpdate.agent_id !== undefined && normalizedUpdate.agent_id !== '') {
		const v = normalizedUpdate.agent_id as string | number;
		normalizedUpdate.agent_id = typeof v === 'string' ? parseInt(v, 10) : v;
	}
	if (normalizedUpdate.status_id !== undefined && normalizedUpdate.status_id !== '') {
		const v = normalizedUpdate.status_id as string | number;
		normalizedUpdate.status_id = typeof v === 'string' ? parseInt(v, 10) : v;
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
