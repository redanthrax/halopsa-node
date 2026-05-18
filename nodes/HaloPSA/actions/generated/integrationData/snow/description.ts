import { INodeProperties } from 'n8n-workflow';

export const snowDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['snow'] } }, default: {} },
];
