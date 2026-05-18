import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Rule ID', name: 'ruleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['contractRules'], operation: ['delete'] } }, default: 0 },
];
