import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketAreaId = this.getNodeParameter('ticketAreaId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/TicketArea/${ticketAreaId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
