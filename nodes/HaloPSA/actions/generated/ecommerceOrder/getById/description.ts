import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Ecommerce Order ID', name: 'ecommerceOrderId', type: 'number', required: true,
		displayOptions: { show: { resource: ['ecommerceOrder'], operation: ['getById'] } }, default: 0 },
];
