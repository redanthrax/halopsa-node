import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['projects'],
				operation: ['update'],
			},
		},
		default: 0,
		description: 'The ID of the project to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['projects'],
				operation: ['update'],
			},
		},
	options: [
		{
			displayName: 'Agent Name or ID',
			name: 'agent_id',
			type: 'options',
			typeOptions: {
				loadOptionsMethod: 'getAgents',
			},
			default: '',
			description: 'The assigned agent. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		},
		{
			displayName: 'Budget Amount',
			name: 'budgetamount',
			type: 'number',
			typeOptions: {
				numberPrecision: 2,
			},
			default: 0,
			description: 'The budget amount for the project',
		},
		{
			displayName: 'Budget Hours',
			name: 'budgethours',
			type: 'number',
			typeOptions: {
				numberPrecision: 2,
			},
			default: 0,
			description: 'The budgeted hours for the project',
		},
		{
			displayName: 'Client Name or ID',
			name: 'client_id',
			type: 'options',
			typeOptions: {
				loadOptionsMethod: 'getClients',
			},
			default: '',
			description: 'The client this project belongs to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		},
		{
			displayName: 'Closed Date',
			name: 'closeddate',
			type: 'dateTime',
			default: '',
			description: 'The date the project was closed',
		},
		{
			displayName: 'Details',
			name: 'details',
			type: 'string',
			typeOptions: {
				rows: 4,
			},
			default: '',
			description: 'Detailed description of the project',
		},
		{
			displayName: 'Flagged',
			name: 'flagged',
			type: 'boolean',
			default: false,
			description: 'Whether the project is flagged',
		},
		{
			displayName: 'Is Opportunity',
			name: 'isopportunity',
			type: 'boolean',
			default: false,
			description: 'Whether this is an opportunity rather than a project',
		},
		{
			displayName: 'Is Project',
			name: 'isproject',
			type: 'boolean',
			default: true,
			description: 'Whether this is a project',
		},
		{
			displayName: 'On Hold',
			name: 'onhold',
			type: 'boolean',
			default: false,
			description: 'Whether the project is on hold',
		},
		{
			displayName: 'Pipeline Stage ID',
			name: 'pipeline_stage_id',
			type: 'number',
			default: 0,
			description: 'The ID of the pipeline stage',
		},
		{
			displayName: 'Priority ID',
			name: 'priority_id',
			type: 'number',
			default: 0,
			description: 'The ID of the project priority',
		},
		{
			displayName: 'Site Name or ID',
			name: 'site_id',
			type: 'options',
			typeOptions: {
				loadOptionsDependsOn: ['updateFields.client_id'],
				loadOptionsMethod: 'getSites',
			},
			default: '',
			description: 'The site this project is associated with. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		},
		{
			displayName: 'Start Date',
			name: 'startdate',
			type: 'dateTime',
			default: '',
			description: 'The start date of the project',
		},
		{
			displayName: 'Status Name or ID',
			name: 'status_id',
			type: 'options',
			typeOptions: {
				loadOptionsMethod: 'getTicketStatuses',
			},
			default: '',
			description: 'The project status. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		},
		{
			displayName: 'Summary',
			name: 'summary',
			type: 'string',
			default: '',
			description: 'The project summary/title',
		},
		{
			displayName: 'Target Date',
			name: 'targetdate',
			type: 'dateTime',
			default: '',
			description: 'The target completion date of the project',
		},
		{
			displayName: 'Team ID',
			name: 'team_id',
			type: 'number',
			default: 0,
			description: 'The ID of the assigned team',
		},
		{
			displayName: 'Ticket Type ID',
			name: 'tickettype_id',
			type: 'number',
			default: 0,
			description: 'The ID of the project type',
		},
		{
			displayName: 'User Name or ID',
			name: 'user_id',
			type: 'options',
			typeOptions: {
				loadOptionsDependsOn: ['updateFields.client_id'],
				loadOptionsMethod: 'getClientUsers',
			},
			default: '',
			description: 'The user requesting the project. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		},
	],
	},
];