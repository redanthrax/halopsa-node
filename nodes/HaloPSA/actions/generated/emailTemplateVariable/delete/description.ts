import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Email Template Variable ID', name: 'emailTemplateVariableId', type: 'number', required: true,
		displayOptions: { show: { resource: ['emailTemplateVariable'], operation: ['delete'] } }, default: 0 },
];
