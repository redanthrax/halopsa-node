import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Ticket Type ID',
		name: 'ticketTypeId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['ticketTypes'],
				operation: ['getById'],
			},
		},
		default: 0,
		required: true,
		description: 'ID of the ticket type to retrieve',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['ticketTypes'],
				operation: ['getById'],
			},
		},
		options: [
			{
				displayName: 'Can Create Only',
				name: 'can_create_only',
				type: 'boolean',
				default: false,
				description: 'Whether to filter by the statuses that are created',
			},
			{
				displayName: 'Can Edit Only',
				name: 'can_edit_only',
				type: 'boolean',
				default: false,
				description: 'Whether to filter by the statuses that can be edited',
			},
			{
				displayName: 'Debug',
				name: 'debug',
				type: 'boolean',
				default: false,
				description: 'Whether to include debug information in the response',
			},
			{
				displayName: 'Include Config',
				name: 'includeconfig',
				type: 'boolean',
				default: false,
				description: 'Whether to include configuration details in the response',
			},
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include extra objects in the response',
			},
			{
				displayName: 'Include KB Info',
				name: 'includekbinfo',
				type: 'boolean',
				default: false,
				description: 'Whether to include knowledge base information in the response',
			},
			{
				displayName: 'Include Team Restrictions',
				name: 'includeteamrestrictions',
				type: 'boolean',
				default: false,
				description: 'Whether to include team restrictions in the response',
			},
			{
				displayName: 'Is Detail Screen',
				name: 'isdetailscreen',
				type: 'boolean',
				default: false,
				description: 'Whether this is for a detail screen',
			},
			{
				displayName: 'Is New Ticket',
				name: 'isnewticket',
				type: 'boolean',
				default: false,
				description: 'Whether this is for a new ticket',
			},
			{
				displayName: 'Survey Fields',
				name: 'survey_fields',
				type: 'boolean',
				default: false,
				description: 'Whether to include survey fields in the response',
			},
			{
				displayName: 'Ticket ID',
				name: 'ticket_id',
				type: 'number',
				default: 0,
				description: 'Filter by the specified ticket',
			},
		],
	},
];