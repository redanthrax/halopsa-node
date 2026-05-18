import { INodeProperties } from 'n8n-workflow';

export const jira2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['jira2'] } }, default: {} },
];
