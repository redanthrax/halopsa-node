import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: { show: { resource: ['holidays'], operation: ['getAll'] } },
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: { show: { resource: ['holidays'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 },
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'number',
		displayOptions: { show: { resource: ['holidays'], operation: ['getAll'] } },
		default: 0,
		description: 'Filter by agent ID',
	},
	{
		displayName: 'Approved Only',
		name: 'approvedOnly',
		type: 'boolean',
		displayOptions: { show: { resource: ['holidays'], operation: ['getAll'] } },
		default: false,
		description: 'Whether to return approved holidays only',
	},
	{
		displayName: 'Start Date',
		name: 'startDate',
		type: 'string',
		displayOptions: { show: { resource: ['holidays'], operation: ['getAll'] } },
		default: '',
		description: 'Start date (ISO 8601)',
	},
	{
		displayName: 'End Date',
		name: 'endDate',
		type: 'string',
		displayOptions: { show: { resource: ['holidays'], operation: ['getAll'] } },
		default: '',
		description: 'End date (ISO 8601)',
	},
];
