import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Email Rule ID', name: 'emailRuleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['emailRule'], operation: ['delete'] } }, default: 0 },
];
