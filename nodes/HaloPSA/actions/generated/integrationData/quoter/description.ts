import { INodeProperties } from 'n8n-workflow';

export const quoterDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['quoter'] } }, default: {} },
];
