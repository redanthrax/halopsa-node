import { INodeProperties } from 'n8n-workflow';

export const processDescription: INodeProperties[] = [
	{
		displayName: 'Recurring Invoice IDs',
		name: 'recurringInvoiceIds',
		type: 'json',
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['process'] } },
		default: '[]',
		required: true,
		description: 'JSON array of recurring invoice IDs to process',
		placeholder: '[1, 2, 3]',
	},
];
