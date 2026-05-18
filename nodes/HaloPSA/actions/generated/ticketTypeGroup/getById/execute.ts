import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketTypeGroupId = this.getNodeParameter('ticketTypeGroupId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/TicketTypeGroup/${ticketTypeGroupId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
