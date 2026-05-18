import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const adobeCommerceDetailId = this.getNodeParameter('adobeCommerceDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/AdobeCommerceDetails/${adobeCommerceDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: adobeCommerceDetailId }, pairedItem: { item: index } }];
}
