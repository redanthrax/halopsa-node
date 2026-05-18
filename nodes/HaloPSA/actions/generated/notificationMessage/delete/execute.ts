import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const notificationMessageId = this.getNodeParameter('notificationMessageId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/NotificationMessage/${notificationMessageId}`, {}, {});
	return [{ json: (response as IDataObject) || { success: true, id: notificationMessageId }, pairedItem: { item: index } }];
}
