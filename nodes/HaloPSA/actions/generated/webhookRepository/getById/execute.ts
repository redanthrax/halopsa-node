import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const webhookRepositoryId = this.getNodeParameter('webhookRepositoryId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/WebhookRepository/${webhookRepositoryId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
