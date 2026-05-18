import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const stockBinId = this.getNodeParameter('stockBinId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/StockBin/${stockBinId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
