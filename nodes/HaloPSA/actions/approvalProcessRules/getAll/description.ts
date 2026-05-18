import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{ displayName: 'Return All', name: 'returnAll', type: 'boolean',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Limit', name: 'limit', type: 'number',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getAll'], returnAll: [false] } },
		typeOptions: { minValue: 1 }, default: 50 },
	{ displayName: 'Global', name: 'global', type: 'boolean',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getAll'] } }, default: false },
	{ displayName: 'Process ID', name: 'processId', type: 'number',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getAll'] } }, default: 0 },
	{ displayName: 'Step ID', name: 'stepId', type: 'number',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getAll'] } }, default: 0 },
];
