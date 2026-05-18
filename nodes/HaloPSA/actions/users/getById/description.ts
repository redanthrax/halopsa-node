import { INodeProperties } from 'n8n-workflow';
import { optionsJsonProperty } from '../../../filterParameters';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['getById'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the user to retrieve',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['users'],
				operation: ['getById'],
			},
		},
		options: [
			{
				displayName: 'Client ID',
				name: 'client_id',
				type: 'number',
				default: 0,
				description: 'Filter by the specified client',
			},
			{
				displayName: 'Client Override',
				name: 'client_override',
				type: 'number',
				default: 0,
				description: 'Override client filtering',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'options',
				options: [
					{
						name: 'Opportunities',
						value: 'opps',
					},
				],
				default: 'opps',
				description: 'Filter on site permissions - opps defaults users opportunities',
			},
			{
				displayName: 'Include Activity',
				name: 'includeactivity',
				type: 'boolean',
				default: false,
				description: 'Whether to include site ticket activity in the response',
			},
			{
				displayName: 'Include Billing Info',
				name: 'includebillinginfo',
				type: 'boolean',
				default: false,
				description: 'Whether to include billing information in the response',
			},
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include extra objects in the response',
			},
			{
				displayName: 'Include Popups',
				name: 'includepopups',
				type: 'boolean',
				default: false,
				description: 'Whether to include customer pop ups in the response',
			},
			{
				displayName: 'Include Users Assets',
				name: 'includeusersassets',
				type: 'boolean',
				default: false,
				description: 'Whether to include user assets in the response',
			},
			{
				displayName: 'Is Setup',
				name: 'issetup',
				type: 'boolean',
				default: false,
				description: 'Whether this is a setup-related filter option',
			},
			{
				displayName: 'Opportunity ID',
				name: 'opp_id',
				type: 'number',
				default: 0,
				description: 'Filter by User assigned to a particular opportunity',
			},
			{
				displayName: 'Site ID',
				name: 'site_id',
				type: 'number',
				default: 0,
				description: 'Filter by the specified site',
			},
			{
				displayName: 'Site Override',
				name: 'site_override',
				type: 'number',
				default: 0,
				description: 'Override site filtering',
			},
			{
				displayName: 'Supplier ID',
				name: 'supplier_id',
				type: 'number',
				default: 0,
				description: 'Filter by the specified supplier',
			},
			{
				displayName: 'Ticket Type ID',
				name: 'tickettype_id',
				type: 'number',
				default: 0,
				description: 'Filter by ticket type',
			},
			{
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				description: 'Filter by the specified username',
			},
		],
	},
	optionsJsonProperty('users', 'getById'),
];
