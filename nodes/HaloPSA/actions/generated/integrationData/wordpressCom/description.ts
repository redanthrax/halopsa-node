import { INodeProperties } from 'n8n-workflow';

export const wordpressComDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['wordpressCom'] } }, default: {} },
];
