import { INodeProperties } from 'n8n-workflow';

export const jiraDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['jira'] } }, default: {} },
];
