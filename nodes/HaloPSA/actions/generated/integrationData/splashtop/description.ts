import { INodeProperties } from 'n8n-workflow';

export const splashtopDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['splashtop'] } }, default: {} },
];
