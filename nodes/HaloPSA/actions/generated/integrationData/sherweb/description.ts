import { INodeProperties } from 'n8n-workflow';

export const sherwebDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['sherweb'] } }, default: {} },
];
