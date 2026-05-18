import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const integrationErrorId = this.getNodeParameter('integrationErrorId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/IntegrationError/${integrationErrorId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
