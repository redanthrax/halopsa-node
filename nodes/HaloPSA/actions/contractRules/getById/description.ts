import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Rule ID', name: 'ruleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['contractRules'], operation: ['getById'] } }, default: 0 },
];
