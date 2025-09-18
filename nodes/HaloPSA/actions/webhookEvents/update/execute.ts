import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const webhookEventId = this.getNodeParameter('webhookEvent_id', index) as string;
	const updateFields = this.getNodeParameter('updateFields', index, {}) as IDataObject;

	const body = {
		id: webhookEventId,
		...updateFields,
	} as IDataObject;

	try {
		const response = await apiRequest.call(this, 'POST', '/WebhookEvent', [body]);
		// API returns an array, get the first (and should be only) item
		const webhookEvent = Array.isArray(response) ? response[0] : response;

		return [{
			json: webhookEvent,
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw error;
	}
}
