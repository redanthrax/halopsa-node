import { INodeProperties } from 'n8n-workflow';

export const liongardDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['liongard'] } }, default: {} },
];
