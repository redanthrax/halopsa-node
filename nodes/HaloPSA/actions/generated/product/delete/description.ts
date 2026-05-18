import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Product ID', name: 'productId', type: 'number', required: true,
		displayOptions: { show: { resource: ['product'], operation: ['delete'] } }, default: 0 },
];
