import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const assetGroupId = this.getNodeParameter('assetGroupId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AssetGroup/${assetGroupId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
