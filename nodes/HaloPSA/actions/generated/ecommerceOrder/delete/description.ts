import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Ecommerce Order ID', name: 'ecommerceOrderId', type: 'number', required: true,
		displayOptions: { show: { resource: ['ecommerceOrder'], operation: ['delete'] } }, default: 0 },
];
