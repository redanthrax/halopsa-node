import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Plan ID', name: 'planId', type: 'number', required: true,
		displayOptions: { show: { resource: ['contractSchedulePlans'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['contractSchedulePlans'], operation: ['getById'] } }, default: false },
];
