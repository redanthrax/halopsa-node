import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const itemsupplierId = this.getNodeParameter('itemsupplierId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/itemsupplier/${itemsupplierId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: itemsupplierId }, pairedItem: { item: index } }];
}
