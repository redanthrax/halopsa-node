import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Email Rule ID', name: 'emailRuleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['emailRule'], operation: ['getById'] } }, default: 0 },
];
