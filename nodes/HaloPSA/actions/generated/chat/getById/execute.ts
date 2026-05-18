import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const chatId = this.getNodeParameter('chatId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Chat/${chatId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
