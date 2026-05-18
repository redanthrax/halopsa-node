import { INodeProperties } from 'n8n-workflow';

export const snelStart2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['snelStart2'] } }, default: {} },
];
