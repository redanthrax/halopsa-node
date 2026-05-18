import { INodeProperties } from 'n8n-workflow';

export const intacct2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['intacct2'] } }, default: {} },
];
