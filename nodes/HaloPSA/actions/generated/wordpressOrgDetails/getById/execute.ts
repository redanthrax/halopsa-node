import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const wordpressOrgDetailId = this.getNodeParameter('wordpressOrgDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/WordpressOrgDetails/${wordpressOrgDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
