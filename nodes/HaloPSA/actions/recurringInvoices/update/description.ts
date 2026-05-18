import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'RecurringInvoice ID',
		name: 'recurringInvoiceId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['update'] } },
		default: 0,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'json',
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['update'] } },
		default: {},
		description: 'Fields to update on the recurringInvoices',
	},
];
