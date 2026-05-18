import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{ displayName: 'Return All', name: 'returnAll', type: 'boolean',
																																																	description: 'Whether to return all results or only up to a given limit',
		displayOptions: { show: { resource: ['contractSchedulePlans'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Limit', name: 'limit', type: 'number',
																																								description: 'Max number of results to return',
		displayOptions: { show: { resource: ['contractSchedulePlans'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 }, default: 50 },
];
