import { INodeProperties } from 'n8n-workflow';

export const createPdfDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['invoices'], operation: ['createPdf'] } },
		default: 0,
	},
];
