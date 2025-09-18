import { INodeProperties } from 'n8n-workflow';

export const voidDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['invoices'],
				operation: ['void'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the invoice to void',
	},
];