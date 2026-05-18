import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const assetTypeId = this.getNodeParameter('assetTypeId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AssetType/${assetTypeId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
