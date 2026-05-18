import { INodeProperties } from 'n8n-workflow';

export const getUrlDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['takeControl'], operation: ['getUrl'] } }, default: {} },
];
