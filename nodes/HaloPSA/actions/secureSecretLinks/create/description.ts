import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['secureSecretLinks'], operation: ['create'] } }, default: {},
		description: 'SecureSecretLink object or array for POST /SecureSecretLink' },
];
