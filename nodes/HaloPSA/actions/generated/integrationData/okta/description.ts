import { INodeProperties } from 'n8n-workflow';

export const oktaDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['okta'] } }, default: {} },
];
