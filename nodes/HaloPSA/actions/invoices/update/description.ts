import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['invoices'],
				operation: ['update'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the invoice to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['invoices'],
				operation: ['update'],
			},
		},
	options: [
		{
			displayName: 'Amount Due',
			name: 'amountdue',
			type: 'number',
			default: 0,
			description: 'The amount due for the invoice',
		},
		{
			displayName: 'Client ID',
			name: 'client_id',
			type: 'number',
			default: 0,
			description: 'The client ID for the invoice',
		},
		{
			displayName: 'Due Date',
			name: 'duedate',
			type: 'dateTime',
			default: '',
			description: 'The due date for payment',
		},
		{
			displayName: 'Invoice Date',
			name: 'invoice_date',
			type: 'dateTime',
			default: '',
		},
		{
			displayName: 'Notes 1',
			name: 'notes_1',
			type: 'string',
			default: '',
			description: 'Additional notes for the invoice',
		},
		{
			displayName: 'Paid Date',
			name: 'datepaid',
			type: 'dateTime',
			default: '',
			description: 'The date the invoice was paid',
		},
		{
			displayName: 'Posted',
			name: 'posted',
			type: 'boolean',
			default: false,
			description: 'Whether the invoice is posted',
		},
		{
			displayName: 'Reference',
			name: 'reference',
			type: 'string',
			default: '',
			description: 'Invoice reference',
		},
		{
			displayName: 'Payment reference',
			name: 'payment_ref',
			type: 'string',
			default: '',
			description: 'Invoice payment reference',
		},
		{
			displayName: 'Payment status',
			name: 'paymentstatus',
			type: 'number',
			default: 0,
			description: 'Invoice payment status',
		},
		{
			displayName: 'Site Number',
			name: 'sitenumber',
			type: 'number',
			default: 0,
		},
	],
	},
];
