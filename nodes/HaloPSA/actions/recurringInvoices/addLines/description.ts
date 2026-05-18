import { INodeProperties } from 'n8n-workflow';

export const addLinesDescription: INodeProperties[] = [
	{
		displayName: 'Invoice Lines',
		name: 'invoiceLines',
		type: 'json',
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['addLines'] } },
		default: '[]',
		required: true,
		description: 'Array of invoice line objects to add (InvoiceDetail schema)',
	},
];
