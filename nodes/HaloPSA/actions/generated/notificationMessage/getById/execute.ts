import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const notificationMessageId = this.getNodeParameter('notificationMessageId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/NotificationMessage/${notificationMessageId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
