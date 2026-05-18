import { INodeProperties } from 'n8n-workflow';

export const freshdeskDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['freshdesk'] } }, default: {} },
];
