import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Shopify Details ID', name: 'shopifyDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['shopifyDetails'], operation: ['getById'] } }, default: 0 },
];
