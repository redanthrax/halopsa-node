import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const integrationDeltaId = this.getNodeParameter('integrationDeltaId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/IntegrationDelta/${integrationDeltaId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
