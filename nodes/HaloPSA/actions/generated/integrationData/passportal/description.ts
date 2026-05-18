import { INodeProperties } from 'n8n-workflow';

export const passportalDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['passportal'] } }, default: {} },
];
