import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Mailbox ID', name: 'mailboxId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mailbox'], operation: ['getById'] } }, default: 0 },
];
