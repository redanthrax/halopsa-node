import { INodeProperties } from 'n8n-workflow';

export const googleDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['mail'], operation: ['google'] } }, default: {} },
];
