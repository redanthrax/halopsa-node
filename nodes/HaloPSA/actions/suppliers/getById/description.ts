import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Supplier ID', name: 'supplierId', type: 'number', required: true,
		displayOptions: { show: { resource: ['suppliers'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['suppliers'], operation: ['getById'] } }, default: false },
];
