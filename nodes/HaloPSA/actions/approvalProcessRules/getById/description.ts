import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Rule ID', name: 'ruleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['approvalProcessRules'], operation: ['getById'] } }, default: false },
];
