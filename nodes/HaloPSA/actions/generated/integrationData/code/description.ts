import { INodeProperties } from 'n8n-workflow';

export const codeDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['code'] } }, default: {} },
];
