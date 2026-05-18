import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const stockTraceId = this.getNodeParameter('stockTraceId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/StockTrace/${stockTraceId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
