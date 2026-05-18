import { INodeProperties } from 'n8n-workflow';

export const quickBooksOnline2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['quickBooksOnline2'] } }, default: {} },
];
