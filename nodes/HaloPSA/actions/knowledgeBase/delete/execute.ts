import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const articleId = this.getNodeParameter('articleId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/KBArticle/${articleId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: articleId },
		pairedItem: { item: index },
	}];
}
