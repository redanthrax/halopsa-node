import { INodeProperties } from 'n8n-workflow';

export const newRelicDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['newRelic'] } }, default: {} },
];
