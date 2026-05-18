import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Email Template Variable ID', name: 'emailTemplateVariableId', type: 'number', required: true,
		displayOptions: { show: { resource: ['emailTemplateVariable'], operation: ['getById'] } }, default: 0 },
];
