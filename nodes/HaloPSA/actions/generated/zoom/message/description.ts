import { INodeProperties } from 'n8n-workflow';

export const messageDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['zoom'], operation: ['message'] } }, default: {} },
];
