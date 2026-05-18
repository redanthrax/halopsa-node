import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const search = this.getNodeParameter('search', index, '') as string;

	const qs: IDataObject = {};
	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = Math.min(Math.max(limit, 1), 100);
	}
	if (search) {
		qs.search = search;
	}

	const response = await apiRequest.call(this, 'GET', '/KBArticle', {}, qs);
	const articles = Array.isArray(response)
		? response
		: (response as IDataObject)?.articles ?? [response];

	const list = Array.isArray(articles) ? articles : [articles];

	return list.map((article) => ({
		json: article as IDataObject,
		pairedItem: { item: index },
	}));
}
