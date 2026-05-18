import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const nCentralDetailId = this.getNodeParameter('nCentralDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/NCentralDetails/${nCentralDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
