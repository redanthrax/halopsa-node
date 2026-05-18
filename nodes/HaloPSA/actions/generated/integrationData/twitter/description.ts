import { INodeProperties } from 'n8n-workflow';

export const twitterDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['twitter'] } }, default: {} },
];
