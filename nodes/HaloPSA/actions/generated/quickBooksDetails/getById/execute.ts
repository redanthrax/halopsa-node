import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const quickBooksDetailId = this.getNodeParameter('quickBooksDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/QuickBooksDetails/${quickBooksDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
