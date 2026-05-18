import { INodeProperties } from 'n8n-workflow';

export const azureADDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['azureAD'] } }, default: {} },
];
