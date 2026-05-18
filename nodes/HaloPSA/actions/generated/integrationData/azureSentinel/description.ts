import { INodeProperties } from 'n8n-workflow';

export const azureSentinelDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['azureSentinel'] } }, default: {} },
];
