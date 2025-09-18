import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoiceId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['invoices'],
				operation: ['getById'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the invoice to retrieve',
	},
	{
		displayName: 'Include Details',
		name: 'includedetails',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['invoices'],
				operation: ['getById'],
			},
		},
		default: false,
		description: 'Whether to include extra objects in the response',
	},
];