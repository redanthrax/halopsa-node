import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Team ID',
		name: 'teamId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['teams'], operation: ['getById'] } },
		default: 0,
	},
	{
		displayName: 'Include Agents',
		name: 'includeAgents',
		type: 'boolean',
		displayOptions: { show: { resource: ['teams'], operation: ['getById'] } },
		default: false,
	},
	{
		displayName: 'Include Details',
		name: 'includeDetails',
		type: 'boolean',
		displayOptions: { show: { resource: ['teams'], operation: ['getById'] } },
		default: false,
	},
];
