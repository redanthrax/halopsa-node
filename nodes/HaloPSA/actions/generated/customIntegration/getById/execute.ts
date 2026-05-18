import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customIntegrationId = this.getNodeParameter('customIntegrationId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CustomIntegration/${customIntegrationId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
