import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Sales Mailbox ID', name: 'salesMailboxId', type: 'number', required: true,
		displayOptions: { show: { resource: ['salesMailbox'], operation: ['delete'] } }, default: 0 },
];
