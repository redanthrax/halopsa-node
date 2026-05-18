import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'number',
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['create'] } },
		default: 0,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['create'] } },
		default: {},
		description: 'RecurringInvoiceHeader fields as JSON (summary, status, lines, etc.)',
	},
];
