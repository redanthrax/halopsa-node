import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Mailbox Credential ID', name: 'mailboxCredentialId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mailboxCredential'], operation: ['delete'] } }, default: 0 },
];
