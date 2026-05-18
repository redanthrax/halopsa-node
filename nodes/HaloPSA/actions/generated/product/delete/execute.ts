import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const productId = this.getNodeParameter('productId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Product/${productId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: productId }, pairedItem: { item: index } }];
}
