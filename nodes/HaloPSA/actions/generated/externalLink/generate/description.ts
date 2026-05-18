import { INodeProperties } from 'n8n-workflow';

export const generateDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['externalLink'], operation: ['generate'] } }, default: {} },
];
