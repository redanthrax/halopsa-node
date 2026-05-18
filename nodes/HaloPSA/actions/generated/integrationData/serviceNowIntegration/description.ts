import { INodeProperties } from 'n8n-workflow';

export const serviceNowIntegrationDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['serviceNowIntegration'] } }, default: {} },
];
