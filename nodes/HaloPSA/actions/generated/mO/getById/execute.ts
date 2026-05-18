import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const mOId = this.getNodeParameter('mOId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/MO/${mOId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
