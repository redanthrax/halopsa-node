import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const articleId = this.getNodeParameter('articleId', index) as number;
	const useful = this.getNodeParameter('useful', index, true) as boolean;

	const body = [{ id: articleId, useful }];
	const response = await apiRequest.call(this, 'POST', '/KBArticle/vote', body, {});
	const record = Array.isArray(response) ? response[0] : response;

	return [{ json: (record ?? response) as IDataObject, pairedItem: { item: index } }];
}
