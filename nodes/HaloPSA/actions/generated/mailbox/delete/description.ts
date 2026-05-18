import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Mailbox ID', name: 'mailboxId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mailbox'], operation: ['delete'] } }, default: 0 },
];
