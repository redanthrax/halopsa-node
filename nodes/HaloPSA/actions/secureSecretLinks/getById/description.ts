import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Link ID', name: 'linkId', type: 'number', required: true,
		displayOptions: { show: { resource: ['secureSecretLinks'], operation: ['getById'] } }, default: 0 },
];
