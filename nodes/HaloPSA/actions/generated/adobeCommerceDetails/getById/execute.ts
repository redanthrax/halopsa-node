import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const adobeCommerceDetailId = this.getNodeParameter('adobeCommerceDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/AdobeCommerceDetails/${adobeCommerceDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
