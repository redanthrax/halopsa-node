import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['getAll'] } },
		default: false,
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		description: 'Max number of results to return',
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 },
		default: 50,
	},
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'number',
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['getAll'] } },
		default: 0,
		description: 'Filter by client (0 = no filter)',
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string',
		displayOptions: { show: { resource: ['recurringInvoices'], operation: ['getAll'] } },
		default: '',
	},
];
