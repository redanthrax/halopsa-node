import { INodeProperties } from 'n8n-workflow';

export const stripeDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['stripe'] } }, default: {} },
];
