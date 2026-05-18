import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{ displayName: 'Return All', name: 'returnAll', type: 'boolean',
																																																	description: 'Whether to return all results or only up to a given limit',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Limit', name: 'limit', type: 'number',
																																								description: 'Max number of results to return',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 }, default: 50 },
	{ displayName: 'Global', name: 'global', type: 'boolean',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Process ID', name: 'processId', type: 'number',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Step ID', name: 'stepId', type: 'number',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getAll'] } }, default: 0 },
];
