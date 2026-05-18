import { INodeProperties } from 'n8n-workflow';

export const hashingDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['health'], operation: ['hashing'] } }, default: {} },
];
