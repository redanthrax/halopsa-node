import { INodeProperties } from 'n8n-workflow';

export const rhipeDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['rhipe'] } }, default: {} },
];
