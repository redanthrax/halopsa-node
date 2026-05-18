import { INodeProperties } from 'n8n-workflow';

export const validateDescription: INodeProperties[] = [
	{ displayName: 'Token', name: 'token', type: 'string',
																																								typeOptions: { password: true },
		displayOptions: { show: { resource: ['secureSecretLinks'], operation: ['validate'] } }, default: '' },
	{ displayName: 'Passphrase', name: 'passphrase', type: 'string',
		displayOptions: { show: { resource: ['secureSecretLinks'], operation: ['validate'] } }, default: '' },
];
