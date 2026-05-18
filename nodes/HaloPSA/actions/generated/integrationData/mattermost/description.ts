import { INodeProperties } from 'n8n-workflow';

export const mattermostDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['mattermost'] } }, default: {} },
];
