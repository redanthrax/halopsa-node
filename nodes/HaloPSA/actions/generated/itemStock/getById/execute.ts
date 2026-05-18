import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const itemStockId = this.getNodeParameter('itemStockId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ItemStock/${itemStockId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
