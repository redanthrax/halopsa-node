import { INodeProperties } from 'n8n-workflow';

export const autotaskDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['autotask'] } }, default: {} },
];
