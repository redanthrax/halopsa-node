import { INodeProperties } from 'n8n-workflow';

export const sageBusinessCloud2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['sageBusinessCloud2'] } }, default: {} },
];
