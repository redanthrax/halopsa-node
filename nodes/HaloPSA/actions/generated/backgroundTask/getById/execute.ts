import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const backgroundTaskId = this.getNodeParameter('backgroundTaskId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/BackgroundTask/${backgroundTaskId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
