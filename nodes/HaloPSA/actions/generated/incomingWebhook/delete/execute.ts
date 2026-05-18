import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const incomingWebhookId = this.getNodeParameter('incomingWebhookId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/IncomingWebhook/${incomingWebhookId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: incomingWebhookId }, pairedItem: { item: index } }];
}
