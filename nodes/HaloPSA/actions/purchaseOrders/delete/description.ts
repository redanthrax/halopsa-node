import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'PurchaseOrder ID',
		name: 'purchaseOrderId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['purchaseOrders'], operation: ['delete'] } },
		default: 0,
	},
];
