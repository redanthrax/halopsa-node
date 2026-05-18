import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customIntegrationRepositoryId = this.getNodeParameter('customIntegrationRepositoryId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CustomIntegrationRepository/${customIntegrationRepositoryId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
