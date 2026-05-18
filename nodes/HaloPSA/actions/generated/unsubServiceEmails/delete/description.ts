import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Unsub Service Emails ID', name: 'unsubServiceEmailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['unsubServiceEmails'], operation: ['delete'] } }, default: 0 },
];
