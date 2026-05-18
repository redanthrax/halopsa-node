import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'PurchaseOrder ID',
		name: 'purchaseOrderId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['purchaseOrders'], operation: ['getById'] } },
		default: 0,
	},
];
