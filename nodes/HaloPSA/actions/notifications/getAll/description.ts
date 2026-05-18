import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: { show: { resource: ['notifications'], operation: ['getAll'] } },
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: { show: { resource: ['notifications'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 },
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'number',
		displayOptions: { show: { resource: ['notifications'], operation: ['getAll'] } },
		default: 0,
		description: 'Filter by agent ID',
	},
	{
		displayName: 'Restrict To Agent ID',
		name: 'restrictToAgentId',
		type: 'number',
		displayOptions: { show: { resource: ['notifications'], operation: ['getAll'] } },
		default: 0,
		description: 'Restrict results to agent ID',
	},
	{
		displayName: 'Show All',
		name: 'showAll',
		type: 'boolean',
		displayOptions: { show: { resource: ['notifications'], operation: ['getAll'] } },
		default: false,
		description: 'Whether to include all notifications',
	},
	{
		displayName: 'Type',
		name: 'type',
		type: 'number',
		displayOptions: { show: { resource: ['notifications'], operation: ['getAll'] } },
		default: 0,
		description: 'Filter by notification type',
	},
];
