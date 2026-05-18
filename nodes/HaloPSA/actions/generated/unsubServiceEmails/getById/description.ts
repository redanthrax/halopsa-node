import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Unsub Service Emails ID', name: 'unsubServiceEmailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['unsubServiceEmails'], operation: ['getById'] } }, default: 0 },
];
