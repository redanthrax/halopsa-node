import { INodeProperties } from 'n8n-workflow';

export const syncroDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['syncro'] } }, default: {} },
];
