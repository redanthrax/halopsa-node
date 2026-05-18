import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const addressbookId = this.getNodeParameter('addressbookId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Addressbook/${addressbookId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
