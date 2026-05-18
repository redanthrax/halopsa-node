import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'PurchaseOrder ID',
		name: 'purchaseOrderId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['purchaseOrders'], operation: ['update'] } },
		default: 0,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'json',
		displayOptions: { show: { resource: ['purchaseOrders'], operation: ['update'] } },
		default: {},
		description: 'Fields to update on the purchaseOrders',
	},
];
