import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const screenLayoutId = this.getNodeParameter('screenLayoutId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ScreenLayout/${screenLayoutId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
