import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['webhooks'],
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
				operation: ['getAll'],
				resource: ['webhooks'],
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
		displayOptions: {
			show: {
				operation: ['getAll'],
				resource: ['webhooks'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Is Azure Automation',
				name: 'isazureautomation',
				type: 'boolean',
				default: false,
				description: 'Whether to filter for Azure Automation webhooks only',
			},
			{
				displayName: 'Type',
				name: 'type',
				type: 'number',
				default: 0,
				description: 'Filter webhooks by type (0: Outbound, 1: Runbook)',
			},
		],
	},
];