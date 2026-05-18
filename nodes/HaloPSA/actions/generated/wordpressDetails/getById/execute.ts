import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const wordpressDetailId = this.getNodeParameter('wordpressDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/WordpressDetails/${wordpressDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
