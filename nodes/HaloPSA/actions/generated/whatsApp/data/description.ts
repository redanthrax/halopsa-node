import { INodeProperties } from 'n8n-workflow';

export const dataDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['whatsApp'], operation: ['data'] } }, default: {} },
];
