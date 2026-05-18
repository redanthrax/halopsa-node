import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const slackChatAppId = this.getNodeParameter('slackChatAppId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/SlackChatApp/${slackChatAppId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: slackChatAppId }, pairedItem: { item: index } }];
}
