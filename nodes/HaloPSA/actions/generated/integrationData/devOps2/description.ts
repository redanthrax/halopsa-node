import { INodeProperties } from 'n8n-workflow';

export const devOps2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['devOps2'] } }, default: {} },
];
