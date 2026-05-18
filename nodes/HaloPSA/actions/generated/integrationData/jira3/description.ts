import { INodeProperties } from 'n8n-workflow';

export const jira3Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['jira3'] } }, default: {} },
];
