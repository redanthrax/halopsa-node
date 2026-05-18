import { INodeProperties } from 'n8n-workflow';

export const ateraDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['atera'] } }, default: {} },
];
