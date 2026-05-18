import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: { show: { resource: ['lookups'], operation: ['getAll'] } },
		default: false,
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: { show: { resource: ['lookups'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 },
		default: 50,
	},
	{
		displayName: 'Lookup ID',
		name: 'lookupId',
		type: 'number',
		displayOptions: { show: { resource: ['lookups'], operation: ['getAll'] } },
		default: 0,
		description: 'Lookup type ID filter (0 = no filter)',
	},
	{
		displayName: 'Client ID',
		name: 'clientId',
		type: 'number',
		displayOptions: { show: { resource: ['lookups'], operation: ['getAll'] } },
		default: 0,
		description: 'Client filter (0 = no filter)',
	},
];
