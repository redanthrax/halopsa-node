import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Notification Message ID', name: 'notificationMessageId', type: 'number', required: true,
		displayOptions: { show: { resource: ['notificationMessage'], operation: ['getById'] } }, default: 0 },
];
