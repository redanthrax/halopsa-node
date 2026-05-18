import { INodeProperties } from 'n8n-workflow';

export const rDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['mO'], operation: ['r'] } }, default: {} },
];
