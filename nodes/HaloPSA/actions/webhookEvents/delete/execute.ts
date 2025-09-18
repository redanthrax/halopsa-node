import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const webhookEventId = this.getNodeParameter('webhookEvent_id', index) as string;

	try {
		const response = await apiRequest.call(this, 'DELETE', `/WebhookEvent/${webhookEventId}`);

		return [{
			json: { success: true, message: `Webhook event ${webhookEventId} deleted successfully`, ...response },
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw error;
	}
}
