import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: { show: { resource: ['quotations'], operation: ['getAll'] } },
		default: false,
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: { show: { resource: ['quotations'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 },
		default: 50,
	},
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'number',
		displayOptions: { show: { resource: ['quotations'], operation: ['getAll'] } },
		default: 0,
		description: 'Filter by client (0 = no filter)',
	},
	{
		displayName: 'Search',
		name: 'search',
		type: 'string',
		displayOptions: { show: { resource: ['quotations'], operation: ['getAll'] } },
		default: '',
	},
	{
		displayName: 'Open Only',
		name: 'openOnly',
		type: 'boolean',
		displayOptions: { show: { resource: ['quotations'], operation: ['getAll'] } },
		default: false,
	},
];
