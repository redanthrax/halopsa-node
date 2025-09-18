import { INodeProperties } from 'n8n-workflow';

export const getALLDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['timesheetEvent'],
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
				resource: ['timesheetEvent'],
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
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['timesheetEvent'],
				operation: ['getAll'],
			},
		},
		options: [
			{
				displayName: 'Agent ID',
				name: 'agent_id',
				type: 'number',
				default: 0,
				description: 'Filter by the specified agent',
			},
			{
				displayName: 'Agents',
				name: 'agents',
				type: 'string',
				default: '',
				description: 'Filter by multiple agents (comma-separated)',
			},
			{
				displayName: 'End Date',
				name: 'end_date',
				type: 'string',
				default: '',
				description: 'Filter by end date',
			},
			{
				displayName: 'Start Date',
				name: 'start_date',
				type: 'string',
				default: '',
				description: 'Filter by start date',
			},
			{
				displayName: 'UTC Offset',
				name: 'utcoffset',
				type: 'number',
				default: 0,
				description: 'UTC offset for date filtering',
			},
		],
	},
];