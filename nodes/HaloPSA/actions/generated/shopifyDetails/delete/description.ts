import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Shopify Details ID', name: 'shopifyDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['shopifyDetails'], operation: ['delete'] } }, default: 0 },
];
