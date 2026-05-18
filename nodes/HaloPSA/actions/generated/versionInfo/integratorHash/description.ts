import { INodeProperties } from 'n8n-workflow';

export const integratorHashDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['versionInfo'], operation: ['integratorHash'] } }, default: {} },
];
