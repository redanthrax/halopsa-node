import { INodeProperties } from 'n8n-workflow';

export const bDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['mO'], operation: ['b'] } }, default: {} },
];
