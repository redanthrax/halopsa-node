import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index) as number;
	const additionalFields = this.getNodeParameter('additionalFields', index, {}) as IDataObject;

	const body = [{ id: ticketId, ...additionalFields }];
	const response = await apiRequest.call(this, 'POST', '/Tickets/processchildren', body, {});
	const record = Array.isArray(response) ? response[0] : response;

	return [{ json: (record ?? response) as IDataObject, pairedItem: { item: index } }];
}
