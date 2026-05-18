import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const bookmarkId = this.getNodeParameter('bookmarkId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Bookmark/${bookmarkId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
