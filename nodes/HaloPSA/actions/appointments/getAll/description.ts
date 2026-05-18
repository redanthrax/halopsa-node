import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['appointments'],
				operation: ['getAll'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['appointments'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Agent ID',
		name: 'agentId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['appointments'],
				operation: ['getAll'],
			},
		},
		default: 0,
		description: 'Filter by agent ID (0 = no filter)',
	},
	{
		displayName: 'Start Date (UTC)',
		name: 'startDate',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['appointments'],
				operation: ['getAll'],
			},
		},
		default: '',
		placeholder: '2026-01-01T00:00:00Z',
		description: 'Optional UTC ISO 8601 range start (inclusive)',
	},
	{
		displayName: 'End Date (UTC)',
		name: 'endDate',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['appointments'],
				operation: ['getAll'],
			},
		},
		default: '',
		placeholder: '2026-01-31T23:59:59Z',
		description: 'Optional UTC ISO 8601 range end',
	},
];
