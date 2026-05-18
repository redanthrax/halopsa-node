import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const incomingWebhookId = this.getNodeParameter('incomingWebhookId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/IncomingWebhook/${incomingWebhookId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
