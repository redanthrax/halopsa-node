import { INodeProperties } from 'n8n-workflow';

export const logMeInDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['logMeIn'] } }, default: {} },
];
