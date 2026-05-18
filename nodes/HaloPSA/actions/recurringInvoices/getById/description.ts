import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'RecurringInvoice ID',
		name: 'recurringInvoiceId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['getById'] } },
		default: 0,
	},
];
