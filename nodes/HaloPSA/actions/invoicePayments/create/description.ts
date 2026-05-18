import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['invoicePayments'], operation: ['create'] } },
		default: {}, description: 'Invoice payment fields for POST /InvoicePayment' },
];
