import { INodeProperties } from 'n8n-workflow';

export const updateLinesDescription: INodeProperties[] = [
	{
		displayName: 'Invoice Lines',
		name: 'invoiceLines',
		type: 'json',
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['updateLines'] } },
		default: '[]',
		required: true,
		description: 'Array of invoice line objects (InvoiceDetail schema)',
	},
];
