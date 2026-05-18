import { INodeProperties } from 'n8n-workflow';

export const icingaDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['icinga'] } }, default: {} },
];
