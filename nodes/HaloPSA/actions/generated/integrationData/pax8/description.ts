import { INodeProperties } from 'n8n-workflow';

export const pax8Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['pax8'] } }, default: {} },
];
