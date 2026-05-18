import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Email Store ID', name: 'emailStoreId', type: 'number', required: true,
		displayOptions: { show: { resource: ['emailStore'], operation: ['delete'] } }, default: 0 },
];
