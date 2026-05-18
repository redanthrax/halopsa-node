import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Notification ID',
		name: 'notificationId',
		type: 'number',
		displayOptions: { show: { resource: ['notifications'], operation: ['getById'] } },
		required: true,
		default: 0,
		description: 'ID of the notification',
	},
];
