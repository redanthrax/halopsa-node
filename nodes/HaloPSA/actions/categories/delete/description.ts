import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Category ID', name: 'categoryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['categories'], operation: ['delete'] } }, default: 0 },
];
