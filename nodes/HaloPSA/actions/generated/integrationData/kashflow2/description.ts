import { INodeProperties } from 'n8n-workflow';

export const kashflow2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['kashflow2'] } }, default: {} },
];
