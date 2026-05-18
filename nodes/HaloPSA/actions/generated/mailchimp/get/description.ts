import { INodeProperties } from 'n8n-workflow';

export const getDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['mailchimp'], operation: ['get'] } }, default: {} },
];
