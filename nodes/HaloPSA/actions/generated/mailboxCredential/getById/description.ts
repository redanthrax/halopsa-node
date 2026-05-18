import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Mailbox Credential ID', name: 'mailboxCredentialId', type: 'number', required: true,
		displayOptions: { show: { resource: ['mailboxCredential'], operation: ['getById'] } }, default: 0 },
];
