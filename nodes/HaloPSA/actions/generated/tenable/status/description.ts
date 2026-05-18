import { INodeProperties } from 'n8n-workflow';

export const statusDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['tenable'], operation: ['status'] } }, default: {} },
];
