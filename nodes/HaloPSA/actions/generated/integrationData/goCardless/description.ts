import { INodeProperties } from 'n8n-workflow';

export const goCardlessDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['goCardless'] } }, default: {} },
];
