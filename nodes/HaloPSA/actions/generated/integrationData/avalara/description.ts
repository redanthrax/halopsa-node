import { INodeProperties } from 'n8n-workflow';

export const avalaraDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['avalara'] } }, default: {} },
];
