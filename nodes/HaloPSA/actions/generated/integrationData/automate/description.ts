import { INodeProperties } from 'n8n-workflow';

export const automateDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['automate'] } }, default: {} },
];
