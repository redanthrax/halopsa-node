import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Site ID',
		name: 'siteId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sites'],
				operation: ['getById'],
			},
		},
		default: 1,
		required: true,
		description: 'The ID of the site to retrieve',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['sites'],
				operation: ['getById'],
			},
		},
	options: [
			{
				displayName: 'Client Override',
				name: 'client_override',
				type: 'number',
				default: 0,
				description: 'Filters on a given client ID',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description: 'Filter on site permissions - "opps" defaults sites opportunities',
			},
			{
				displayName: 'Include Activity',
				name: 'includeactivity',
				type: 'boolean',
				default: false,
				description: 'Whether to include site ticket activity in the response',
			},
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include extra objects in the response. This includes: site contacts (sitecontacts), delivery address, full client details with custom fields and billing plans, additional fields, popup notes, external links, extra tabs, FAQ lists, and country/region details.',
			},
			{
				displayName: 'Is Setup',
				name: 'issetup',
				type: 'boolean',
				default: false,
				description: 'Whether to include setup-related information',
			},
			{
				displayName: 'Ticket Type ID',
				name: 'tickettype_id',
				type: 'number',
				default: 0,
				description: 'Filter by ticket type ID',
			},
		],
	},
];