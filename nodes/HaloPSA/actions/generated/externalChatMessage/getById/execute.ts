import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const externalChatMessageId = this.getNodeParameter('externalChatMessageId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/ExternalChatMessage/${externalChatMessageId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
