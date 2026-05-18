import { INodeProperties } from 'n8n-workflow';

export const techDataDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['techData'] } }, default: {} },
];
