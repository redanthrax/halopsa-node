import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const assetTypeMappingId = this.getNodeParameter('assetTypeMappingId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AssetTypeMappings/${assetTypeMappingId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
