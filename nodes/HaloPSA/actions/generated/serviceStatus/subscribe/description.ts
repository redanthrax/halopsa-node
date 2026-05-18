import { INodeProperties } from 'n8n-workflow';

export const subscribeDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['serviceStatus'], operation: ['subscribe'] } }, default: {} },
];
