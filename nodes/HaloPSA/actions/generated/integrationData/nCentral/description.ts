import { INodeProperties } from 'n8n-workflow';

export const nCentralDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['nCentral'] } }, default: {} },
];
