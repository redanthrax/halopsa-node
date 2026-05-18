import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Product ID', name: 'productId', type: 'number', required: true,
		displayOptions: { show: { resource: ['product'], operation: ['getById'] } }, default: 0 },
];
