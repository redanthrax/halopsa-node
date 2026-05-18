import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Sales Mailbox ID', name: 'salesMailboxId', type: 'number', required: true,
		displayOptions: { show: { resource: ['salesMailbox'], operation: ['getById'] } }, default: 0 },
];
