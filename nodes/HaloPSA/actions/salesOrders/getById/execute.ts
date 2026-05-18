import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const salesOrderId = this.getNodeParameter('salesOrderId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/SalesOrder/${salesOrderId}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
