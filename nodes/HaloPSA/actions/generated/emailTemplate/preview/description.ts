import { INodeProperties } from 'n8n-workflow';

export const previewDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['emailTemplate'], operation: ['preview'] } }, default: {} },
];
