import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ticketId = this.getNodeParameter('ticketId', index) as number;
	const reason = this.getNodeParameter('reason', index, '') as string;
	
	const qs = {} as IDataObject;
	
	// Add reason if provided
	if (reason) {
		qs.reason = reason;
	}

	const requestMethod = 'DELETE';
	const endpoint = `/Tickets/${ticketId}`;
	const body = {} as IDataObject;

	await apiRequest.call(this, requestMethod, endpoint, body, qs);

	// Return success response
	return this.helpers.returnJsonArray([{ success: true, ticketId, deleted: true }]);
}