import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const itemId = this.getNodeParameter('itemId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Item/${itemId}`, {}, {});

	return [{ json: response, pairedItem: { item: index } }];
}
