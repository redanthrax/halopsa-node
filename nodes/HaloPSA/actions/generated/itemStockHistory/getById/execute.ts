import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const itemStockHistoryId = this.getNodeParameter('itemStockHistoryId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ItemStockHistory/${itemStockHistoryId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
