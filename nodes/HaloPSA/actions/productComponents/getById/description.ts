import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Component ID', name: 'componentId', type: 'number', required: true,
		displayOptions: { show: { resource: ['productComponents'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['productComponents'], operation: ['getById'] } }, default: false },
];
