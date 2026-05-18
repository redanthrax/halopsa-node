import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const customIntegrationMethodId = this.getNodeParameter('customIntegrationMethodId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/CustomIntegrationMethod/${customIntegrationMethodId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
