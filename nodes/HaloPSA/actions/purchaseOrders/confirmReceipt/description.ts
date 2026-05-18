import { INodeProperties } from 'n8n-workflow';

export const confirmReceiptDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['purchaseOrders'], operation: ['confirmReceipt'] } },
		default: {},
		required: true,
		description: 'SupplierOrderHeader object for POST /PurchaseOrder/confirmreceipt',
	},
];
