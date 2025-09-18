import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['getById'],
			},
		},
		default: 1,
		required: true,
		description: 'The ID of the agent to retrieve',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['getById'],
			},
		},
	options: [
		{
			displayName: 'Client ID Override',
			name: 'clientidoverride',
			type: 'string',
			default: '',
			description: 'Override client ID for filtering',
		},
		{
			displayName: 'Get Holiday Allowance',
			name: 'getholidayallowance',
			type: 'boolean',
			default: false,
			description: 'Whether to get holiday allowance information',
		},
		{
			displayName: 'Get HTML Designer Signature',
			name: 'get_htmldesigner_signature',
			type: 'boolean',
			default: false,
			description: 'Whether to get HTML designer signature',
		},
		{
			displayName: 'Include Details',
			name: 'includedetails',
			type: 'boolean',
			default: false,
			description: 'Whether to include extra objects in the response',
		},
		{
			displayName: 'Is Agent Config',
			name: 'isagentconfig',
			type: 'boolean',
			default: false,
			description: 'Whether this is an agent config request',
		},
		{
			displayName: 'Load Cache',
			name: 'loadcache',
			type: 'boolean',
			default: false,
			description: 'Whether to load cache',
		},
	],
	},
];