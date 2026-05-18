import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const azureDeltaId = this.getNodeParameter('azureDeltaId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AzureDelta/${azureDeltaId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
