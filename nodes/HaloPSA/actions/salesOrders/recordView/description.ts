import { INodeProperties } from 'n8n-workflow';

export const recordViewDescription: INodeProperties[] = [
	{
		displayName: 'Sales Order ID',
		name: 'salesOrderId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['salesOrders'], operation: ['recordView'] } },
		default: 0,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['salesOrders'], operation: ['recordView'] } },
		default: {},
		description: 'Additional JSON fields sent in the request body (merged with record ID)',
	},
];
