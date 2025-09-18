import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function deleteTicketType(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketTypeId = this.getNodeParameter('ticketTypeId', index) as number;

	const requestMethod = 'DELETE';
	const endpoint = `/TicketType/${ticketTypeId}`;
	const body = {} as IDataObject;

	await apiRequest.call(this, requestMethod, endpoint, body);

	return this.helpers.returnJsonArray([{ success: true, id: ticketTypeId, deleted: true }]);
}