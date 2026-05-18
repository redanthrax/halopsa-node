import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{ displayName: 'Return All', name: 'returnAll', type: 'boolean',
																																																	description: 'Whether to return all results or only up to a given limit',
		displayOptions: { show: { resource: ['topLevels'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Limit', name: 'limit', type: 'number',
																																								description: 'Max number of results to return',
		displayOptions: { show: { resource: ['topLevels'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 }, default: 50 },
	{ displayName: 'Search', name: 'search', type: 'string',
		displayOptions: { show: { resource: ['topLevels'], operation: ['getAll'] } }, default: '' },
	{ displayName: 'Organisation ID', name: 'orgId', type: 'number',
		displayOptions: { show: { resource: ['topLevels'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Show All', name: 'showAll', type: 'boolean',
		displayOptions: { show: { resource: ['topLevels'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Include Agents', name: 'includeAgents', type: 'boolean',
		displayOptions: { show: { resource: ['topLevels'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Include Teams', name: 'includeTeams', type: 'boolean',
		displayOptions: { show: { resource: ['topLevels'], operation: ['getAll'] } }, default: false },
];
