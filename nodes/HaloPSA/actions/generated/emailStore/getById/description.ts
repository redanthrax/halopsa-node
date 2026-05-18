import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Email Store ID', name: 'emailStoreId', type: 'number', required: true,
		displayOptions: { show: { resource: ['emailStore'], operation: ['getById'] } }, default: 0 },
];
