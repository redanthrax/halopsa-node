import { INodeProperties } from 'n8n-workflow';

export const xensamDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['xensam'] } }, default: {} },
];
