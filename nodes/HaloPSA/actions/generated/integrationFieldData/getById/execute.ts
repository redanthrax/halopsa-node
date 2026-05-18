import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const integrationFieldDataId = this.getNodeParameter('integrationFieldDataId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/IntegrationFieldData/${integrationFieldDataId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
