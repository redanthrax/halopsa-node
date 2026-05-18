import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const integrationConfigurationId = this.getNodeParameter('integrationConfigurationId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/IntegrationConfiguration/${integrationConfigurationId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
