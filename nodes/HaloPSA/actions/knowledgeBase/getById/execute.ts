import { IExecuteFunctions } from 'n8n-workflow';
import { INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const articleId = this.getNodeParameter('articleId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/KBArticle/${articleId}`, {}, {});

	return [{
		json: response,
		pairedItem: { item: index },
	}];
}
