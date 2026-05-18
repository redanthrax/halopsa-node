import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const priorityId = this.getNodeParameter('priorityId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Priority/${priorityId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
