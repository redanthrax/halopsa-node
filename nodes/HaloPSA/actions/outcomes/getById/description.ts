import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Outcome ID', name: 'outcomeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['outcomes'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['outcomes'], operation: ['getById'] } }, default: false },
];
