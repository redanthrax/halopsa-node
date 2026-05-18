import { INodeProperties } from 'n8n-workflow';

export const jiraServiceManagementDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['jiraServiceManagement'] } }, default: {} },
];
