import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['tickets'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'The ID of the ticket to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['tickets'],
				operation: ['update'],
			},
		},
		options: [
			{
				displayName: 'Agent ID',
				name: 'agent_id',
				type: 'number',
				default: 0,
				description: 'The assigned agent ID',
			},
			{
				displayName: 'Category 1',
				name: 'category_1',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Category 2',
				name: 'category_2',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Details',
				name: 'details',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'The ticket details/description',
			},
			{
				displayName: 'Estimate (Hours)',
				name: 'estimate',
				type: 'number',
				default: 0,
				description: 'Estimated time in hours',
			},
			{
				displayName: 'Flagged',
				name: 'flagged',
				type: 'boolean',
				default: false,
				description: 'Whether the ticket is flagged',
			},
			{
				displayName: 'On Hold',
				name: 'onhold',
				type: 'boolean',
				default: false,
				description: 'Whether the ticket is on hold',
			},
			{
				displayName: 'Priority ID',
				name: 'priority_id',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Status ID',
				name: 'status_id',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Summary',
				name: 'summary',
				type: 'string',
				default: '',
				description: 'The ticket summary/subject',
			},
			{
				displayName: 'Team ID',
				name: 'team_id',
				type: 'number',
				default: 0,
				description: 'The assigned team ID',
			},
		],
	},
];