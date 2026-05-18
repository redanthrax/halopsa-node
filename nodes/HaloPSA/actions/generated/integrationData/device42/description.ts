import { INodeProperties } from 'n8n-workflow';

export const device42Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['device42'] } }, default: {} },
];
