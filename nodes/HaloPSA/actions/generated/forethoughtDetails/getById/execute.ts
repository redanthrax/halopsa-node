import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const forethoughtDetailId = this.getNodeParameter('forethoughtDetailId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ForethoughtDetails/${forethoughtDetailId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
