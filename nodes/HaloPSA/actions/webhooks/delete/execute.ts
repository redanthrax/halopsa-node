import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const webhookId = this.getNodeParameter('webhook_id', index) as string;

	try {
		await apiRequest.call(this, 'DELETE', `/Webhook/${webhookId}`);

		return [{
			json: { success: true, id: webhookId },
			pairedItem: { item: index },
		}];
	} catch (error) {
		throw error;
	}
}