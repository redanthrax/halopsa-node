import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{ displayName: 'Return All', name: 'returnAll', type: 'boolean',
		displayOptions: { show: { resource: ['invoicePayments'], operation: ['getAll'] } },
		default: false, description: 'Whether to return all results or only up to a given limit' },
	{ displayName: 'Limit', name: 'limit', type: 'number',
		displayOptions: { show: { resource: ['invoicePayments'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 }, default: 50, description: 'Max number of results to return' },
	{ displayName: 'Client ID', name: 'clientId', type: 'number',
		displayOptions: { show: { resource: ['invoicePayments'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Invoice ID', name: 'invoiceId', type: 'number',
		displayOptions: { show: { resource: ['invoicePayments'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Search', name: 'search', type: 'string',
		displayOptions: { show: { resource: ['invoicePayments'], operation: ['getAll'] } }, default: '' },
	{ displayName: 'Intent ID', name: 'intentId', type: 'string',
		displayOptions: { show: { resource: ['invoicePayments'], operation: ['getAll'] } }, default: '' },
];
