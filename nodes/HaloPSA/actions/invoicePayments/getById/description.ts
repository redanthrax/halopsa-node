import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Invoice Payment ID', name: 'invoicePaymentId', type: 'number', required: true,
		displayOptions: { show: { resource: ['invoicePayments'], operation: ['getById'] } }, default: 0 },
];
