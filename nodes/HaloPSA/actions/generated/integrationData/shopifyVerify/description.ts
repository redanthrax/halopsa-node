import { INodeProperties } from 'n8n-workflow';

export const shopifyVerifyDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['shopifyVerify'] } }, default: {} },
];
