import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['invoices'],
				operation: ['delete'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the invoice to delete',
	},
	{
		displayName: 'Bypass Accounts Sync',
		name: 'bypass_accounts_sync',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['invoices'],
				operation: ['delete'],
			},
		},
		default: false,
		description: 'Whether to bypass accounts sync',
	},
];