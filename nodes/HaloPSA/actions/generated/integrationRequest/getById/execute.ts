import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const integrationRequestId = this.getNodeParameter('integrationRequestId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/IntegrationRequest/${integrationRequestId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
