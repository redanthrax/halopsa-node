import { INodeProperties } from 'n8n-workflow';

export const recordViewDescription: INodeProperties[] = [
	{
		displayName: 'Purchase Order ID',
		name: 'purchaseOrderId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['purchaseOrders'], operation: ['recordView'] } },
		default: 0,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['purchaseOrders'], operation: ['recordView'] } },
		default: {},
		description: 'Additional JSON fields sent in the request body (merged with record ID)',
	},
];
