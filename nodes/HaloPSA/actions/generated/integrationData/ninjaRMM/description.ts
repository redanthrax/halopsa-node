import { INodeProperties } from 'n8n-workflow';

export const ninjaRMMDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['ninjaRMM'] } }, default: {} },
];
