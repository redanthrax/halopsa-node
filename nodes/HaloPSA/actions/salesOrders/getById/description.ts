import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'SalesOrder ID',
		name: 'salesOrderId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['salesOrders'], operation: ['getById'] } },
		default: 0,
	},
];
