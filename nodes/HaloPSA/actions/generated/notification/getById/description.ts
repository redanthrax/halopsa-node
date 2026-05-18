import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Notification ID', name: 'notificationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['notification'], operation: ['getById'] } }, default: 0 },
];
