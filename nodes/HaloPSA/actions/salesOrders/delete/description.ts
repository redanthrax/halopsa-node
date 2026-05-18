import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'SalesOrder ID',
		name: 'salesOrderId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['salesOrders'], operation: ['delete'] } },
		default: 0,
	},
];
