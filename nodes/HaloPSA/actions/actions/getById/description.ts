import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Action ID',
		name: 'actionId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['actions'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'The ID of the action to retrieve',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['actions'],
				operation: ['getById'],
			},
		},
	options: [
		{
			displayName: 'Agent Only',
			name: 'agentonly',
			type: 'boolean',
			default: false,
			description: 'Whether to get actions done by Agents only',
		},
		{
			displayName: 'Email Only',
			name: 'emailonly',
			type: 'boolean',
			default: false,
			description: 'Whether to get email actions only',
		},
		{
			displayName: 'Include Details',
			name: 'includedetails',
			type: 'boolean',
			default: false,
			description: 'Whether to include extra objects in the response',
		},
		{
			displayName: 'Include Email',
			name: 'includeemail',
			type: 'boolean',
			default: false,
			description: 'Whether to include the plain text and HTML email body in the response',
		},
		{
			displayName: 'Most Recent',
			name: 'mostrecent',
			type: 'boolean',
			default: false,
			description: 'Whether to get the most recent action on the ticket',
		},
		{
			displayName: 'Non System',
			name: 'nonsystem',
			type: 'boolean',
			default: false,
			description: 'Whether to get non system actions only',
		},
		{
			displayName: 'Penultimate',
			name: 'penultimate',
			type: 'boolean',
			default: false,
			description: 'Whether to get actions that are not the most recent only',
		},
		{
			displayName: 'Ticket ID',
			name: 'ticket_id',
			type: 'number',
			default: 0,
			description: 'The ID of the Ticket to get the action for',
		},
	],
	},
];