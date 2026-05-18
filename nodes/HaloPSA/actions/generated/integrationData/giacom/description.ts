import { INodeProperties } from 'n8n-workflow';

export const giacomDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['giacom'] } }, default: {} },
];
