import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Tax Rule ID', name: 'taxRuleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['taxRule'], operation: ['getById'] } }, default: 0 },
];
