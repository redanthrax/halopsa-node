import { INodeProperties } from 'n8n-workflow';

export const qualysDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['qualys'] } }, default: {} },
];
