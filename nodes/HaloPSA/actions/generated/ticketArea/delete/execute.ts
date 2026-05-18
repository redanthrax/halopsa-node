import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketAreaId = this.getNodeParameter('ticketAreaId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/TicketArea/${ticketAreaId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: ticketAreaId }, pairedItem: { item: index } }];
}
