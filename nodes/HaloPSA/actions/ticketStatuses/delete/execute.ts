import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function deleteTicketStatus(this: IExecuteFunctions, index: number): Promise<INodeExecutionData[]> {
	const ticketStatusId = this.getNodeParameter('ticketStatusId', index) as string;

	const responseData = await apiRequest.call(this, 'DELETE', `/Status/${ticketStatusId}`);

	return this.helpers.returnJsonArray(responseData || { success: true });
}