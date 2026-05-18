import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Tax Rule ID', name: 'taxRuleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['taxRule'], operation: ['delete'] } }, default: 0 },
];
