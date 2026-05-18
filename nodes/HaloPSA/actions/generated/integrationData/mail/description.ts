import { INodeProperties } from 'n8n-workflow';

export const mailDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['mail'] } }, default: {} },
];
