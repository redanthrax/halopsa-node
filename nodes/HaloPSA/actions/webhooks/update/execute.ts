import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const webhookId = this.getNodeParameter('webhook_id', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;
	
	const body = {
		id: webhookId,
		...updateFields,
	} as IDataObject;

	try {
		const response = await apiRequest.call(this, 'POST', '/Webhook', [body]);
		// API returns an array, get the first (and should be only) item
		const webhook = Array.isArray(response) ? response[0] : response;

		return [{
			json: webhook,
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw error;
	}
}