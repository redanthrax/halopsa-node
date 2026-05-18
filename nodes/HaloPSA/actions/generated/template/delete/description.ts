import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Template ID', name: 'templateId', type: 'number', required: true,
		displayOptions: { show: { resource: ['template'], operation: ['delete'] } }, default: 0 },
];
