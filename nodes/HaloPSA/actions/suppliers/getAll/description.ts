import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{ displayName: 'Return All', name: 'returnAll', type: 'boolean',
																																																	description: 'Whether to return all results or only up to a given limit',
		displayOptions: { show: { resource: ['suppliers'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Limit', name: 'limit', type: 'number',
																																								description: 'Max number of results to return',
		displayOptions: { show: { resource: ['suppliers'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 }, default: 50 },
	{ displayName: 'Search', name: 'search', type: 'string',
		displayOptions: { show: { resource: ['suppliers'], operation: ['getAll'] } }, default: '' },
	{ displayName: 'Include Active', name: 'includeActive', type: 'boolean',
		displayOptions: { show: { resource: ['suppliers'], operation: ['getAll'] } }, default: true },
	{ displayName: 'Include Inactive', name: 'includeInactive', type: 'boolean',
		displayOptions: { show: { resource: ['suppliers'], operation: ['getAll'] } }, default: false },
];
