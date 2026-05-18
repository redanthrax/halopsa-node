import { INodeProperties } from 'n8n-workflow';

export const microsoftSkusDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['microsoftSkus'] } }, default: {} },
];
