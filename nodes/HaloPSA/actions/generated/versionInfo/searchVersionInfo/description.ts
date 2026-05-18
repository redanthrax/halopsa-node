import { INodeProperties } from 'n8n-workflow';

export const searchVersionInfoDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['versionInfo'], operation: ['searchVersionInfo'] } }, default: {} },
];
