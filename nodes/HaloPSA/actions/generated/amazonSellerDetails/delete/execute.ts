import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const amazonSellerDetailId = this.getNodeParameter('amazonSellerDetailId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/AmazonSellerDetails/${amazonSellerDetailId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: amazonSellerDetailId }, pairedItem: { item: index } }];
}
