import { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const notificationId = this.getNodeParameter('notificationId', index) as number;
	const response = await apiRequest.call(this, 'GET', `/Notification/${notificationId}`, {}, {});
	return [{ json: response, pairedItem: { item: index } }];
}
