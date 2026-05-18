import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Category ID', name: 'categoryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['categories'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['categories'], operation: ['getById'] } }, default: false },
];
