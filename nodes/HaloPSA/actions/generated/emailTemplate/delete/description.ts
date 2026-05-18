import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Email Template ID', name: 'emailTemplateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['emailTemplate'], operation: ['delete'] } }, default: 0 },
];
