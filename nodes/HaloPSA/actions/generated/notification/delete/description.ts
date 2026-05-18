import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Notification ID', name: 'notificationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['notification'], operation: ['delete'] } }, default: 0 },
];
