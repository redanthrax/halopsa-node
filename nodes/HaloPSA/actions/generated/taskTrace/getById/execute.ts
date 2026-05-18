import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const taskTraceId = this.getNodeParameter('taskTraceId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/TaskTrace/${taskTraceId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
