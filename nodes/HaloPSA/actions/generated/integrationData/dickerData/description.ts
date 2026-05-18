import { INodeProperties } from 'n8n-workflow';

export const dickerDataDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['dickerData'] } }, default: {} },
];
