import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Link ID', name: 'linkId', type: 'number', required: true,
		displayOptions: { show: { resource: ['secureSecretLinks'], operation: ['delete'] } }, default: 0 },
];
