import { INodeProperties } from 'n8n-workflow';

export const dattoDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['datto'] } }, default: {} },
];
