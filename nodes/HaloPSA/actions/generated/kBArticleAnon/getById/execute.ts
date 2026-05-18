import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const kBArticleAnonId = this.getNodeParameter('kBArticleAnonId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/KBArticleAnon/${kBArticleAnonId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
