import { INodeProperties } from 'n8n-workflow';

export const unsubscribeDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['service'], operation: ['unsubscribe'] } }, default: {} },
];
