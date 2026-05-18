import { INodeProperties } from 'n8n-workflow';

export const exactOnline2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['exactOnline2'] } }, default: {} },
];
