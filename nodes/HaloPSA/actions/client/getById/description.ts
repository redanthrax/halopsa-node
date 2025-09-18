import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['getById'],
			},
		},
		required: true,
		default: 0,
		description: 'The ID of the client to retrieve',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['getById'],
			},
		},
		options: [
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description: 'Filter on client permissions - "opps" defaults client opportunities',
			},
			{
				displayName: 'Get Available RTs',
				name: 'getavailablerts',
				type: 'boolean',
				default: false,
				description: 'Whether to include a list of a ticket types the client can log',
			},
			{
				displayName: 'Include Activity',
				name: 'includeactivity',
				type: 'boolean',
				default: false,
				description: 'Whether to include customer ticket activity in the response',
			},
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include extra objects in the response',
			},
			{
				displayName: 'Include Periods',
				name: 'includeperiods',
				type: 'boolean',
				default: false,
				description: 'Whether to include pre-pay periods in the response',
			},
			{
				displayName: 'Include Prepay',
				name: 'includeprepay',
				type: 'boolean',
				default: false,
				description: 'Whether to include pre-pay in the response',
			},
			{
				displayName: 'Ticket Type ID',
				name: 'tickettype_id',
				type: 'number',
				default: 0,
				description: 'Ticket type ID filter',
			},
		],
	},
];