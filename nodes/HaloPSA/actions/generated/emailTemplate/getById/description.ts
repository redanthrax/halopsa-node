import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Email Template ID', name: 'emailTemplateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['emailTemplate'], operation: ['getById'] } }, default: 0 },
];
