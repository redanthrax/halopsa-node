import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Notification ID',
		name: 'notificationId',
		type: 'number',
		displayOptions: { show: { resource: ['notifications'], operation: ['delete'] } },
		required: true,
		default: 0,
		description: 'ID of the notification to delete',
	},
];
