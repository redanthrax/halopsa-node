import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'RecurringInvoice ID',
		name: 'recurringInvoiceId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['delete'] } },
		default: 0,
	},
];
