import { INodeProperties } from 'n8n-workflow';

export const etilizeDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['etilize'] } }, default: {} },
];
