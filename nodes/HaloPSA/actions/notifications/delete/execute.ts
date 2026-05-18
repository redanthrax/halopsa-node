import { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const notificationId = this.getNodeParameter('notificationId', index) as number;
	const response = await apiRequest.call(this, 'DELETE', `/Notification/${notificationId}`, {}, {});

	return [{
		json: (response as IDataObject) || { success: true, id: notificationId },
		pairedItem: { item: index },
	}];
}
