import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const bulkEmailId = this.getNodeParameter('bulkEmailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/BulkEmail/${bulkEmailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
