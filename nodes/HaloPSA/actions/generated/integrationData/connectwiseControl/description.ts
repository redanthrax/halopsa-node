import { INodeProperties } from 'n8n-workflow';

export const connectwiseControlDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['connectwiseControl'] } }, default: {} },
];
