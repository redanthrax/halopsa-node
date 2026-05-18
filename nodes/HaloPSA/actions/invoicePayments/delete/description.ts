import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Invoice Payment ID', name: 'invoicePaymentId', type: 'number', required: true,
		displayOptions: { show: { resource: ['invoicePayments'], operation: ['delete'] } }, default: 0 },
];
