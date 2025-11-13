import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Email Address',
		name: 'email',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'The email address for the new agent',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'The name of the new agent',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Active',
				name: 'isdisabled',
				type: 'boolean',
				default: false,
				description: 'Whether the agent is disabled (false = active, true = disabled)',
			},
			{
				displayName: 'Department Name or ID',
				name: 'department_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getDepartments',
				},
				default: '',
				description: 'The department for the agent. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
			{
				displayName: 'First Name',
				name: 'firstname',
				type: 'string',
				default: '',
				description: 'The first name of the agent',
			},
			{
				displayName: 'Is Admin',
				name: 'isadmin',
				type: 'boolean',
				default: false,
				description: 'Whether the agent has admin privileges',
			},
			{
				displayName: 'Last Name',
				name: 'surname',
				type: 'string',
				default: '',
				description: 'The last name (surname) of the agent',
			},
			{
				displayName: 'Login Name',
				name: 'loginname',
				type: 'string',
				default: '',
				description: 'The login name for the agent',
			},
			{
				displayName: 'Phone Number',
				name: 'sms',
				type: 'string',
				default: '',
				description: 'The phone/SMS number of the agent',
			},
			{
				displayName: 'Team Name or ID',
				name: 'team_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getTeams',
				},
				default: '',
				description: 'The team for the agent. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
			},
		],
	},
];