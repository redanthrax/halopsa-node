import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Notification Message ID', name: 'notificationMessageId', type: 'number', required: true,
		displayOptions: { show: { resource: ['notificationMessage'], operation: ['delete'] } }, default: 0 },
];
