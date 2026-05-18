import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ecommerceOrderId = this.getNodeParameter('ecommerceOrderId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/EcommerceOrder/${ecommerceOrderId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: ecommerceOrderId }, pairedItem: { item: index } }];
}
