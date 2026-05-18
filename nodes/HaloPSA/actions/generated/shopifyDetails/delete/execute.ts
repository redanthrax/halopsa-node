import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const shopifyDetailId = this.getNodeParameter('shopifyDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ShopifyDetails/${shopifyDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: shopifyDetailId }, pairedItem: { item: index } }];
}
