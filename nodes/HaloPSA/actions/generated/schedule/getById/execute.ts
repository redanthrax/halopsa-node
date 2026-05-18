import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const scheduleId = this.getNodeParameter('scheduleId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Schedule/${scheduleId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
