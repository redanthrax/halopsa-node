import { INodeProperties } from 'n8n-workflow';

export const taniumDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['tanium'] } }, default: {} },
];
