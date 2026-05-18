import { INodeProperties } from 'n8n-workflow';

export const readDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['haloNews'], operation: ['read'] } }, default: {} },
];
