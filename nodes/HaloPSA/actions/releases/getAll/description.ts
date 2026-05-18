import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{ displayName: 'Return All', name: 'returnAll', type: 'boolean',
		displayOptions: { show: { resource: ['releases'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Limit', name: 'limit', type: 'number',
		displayOptions: { show: { resource: ['releases'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 }, default: 50 },
	{ displayName: 'Search', name: 'search', type: 'string',
		displayOptions: { show: { resource: ['releases'], operation: ['getAll'] } }, default: '' },
	{ displayName: 'Product ID', name: 'productId', type: 'number',
		displayOptions: { show: { resource: ['releases'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['releases'], operation: ['getAll'] } }, default: false },
];
