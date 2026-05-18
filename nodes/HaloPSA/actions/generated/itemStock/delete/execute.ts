import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const itemStockId = this.getNodeParameter('itemStockId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/ItemStock/${itemStockId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: itemStockId }, pairedItem: { item: index } }];
}
