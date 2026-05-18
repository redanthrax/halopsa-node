import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'SalesOrder ID',
		name: 'salesOrderId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['salesOrders'], operation: ['update'] } },
		default: 0,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'json',
		displayOptions: { show: { resource: ['salesOrders'], operation: ['update'] } },
		default: {},
		description: 'Fields to update on the salesOrders',
	},
];
