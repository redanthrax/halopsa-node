import { INodeProperties } from 'n8n-workflow';

export const azureDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['mail'], operation: ['azure'] } }, default: {} },
];
