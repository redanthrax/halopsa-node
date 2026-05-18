import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const assetTypeId = this.getNodeParameter('assetTypeId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/AssetType/${assetTypeId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: assetTypeId }, pairedItem: { item: index } }];
}
