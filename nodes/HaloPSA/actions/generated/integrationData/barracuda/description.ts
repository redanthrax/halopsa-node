import { INodeProperties } from 'n8n-workflow';

export const barracudaDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['barracuda'] } }, default: {} },
];
