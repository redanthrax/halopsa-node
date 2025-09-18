import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Email Address',
		name: 'emailaddress',
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
				name: 'active',
				type: 'boolean',
				default: true,
				description: 'Whether the agent is active',
			},
			{
				displayName: 'Department ID',
				name: 'department_id',
				type: 'number',
				default: 0,
				description: 'The department ID for the agent',
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
				name: 'lastname',
				type: 'string',
				default: '',
				description: 'The last name of the agent',
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
				name: 'phonenumber',
				type: 'string',
				default: '',
				description: 'The phone number of the agent',
			},
			{
				displayName: 'Team ID',
				name: 'team_id',
				type: 'number',
				default: 0,
				description: 'The team ID for the agent',
			},
		],
	},
];