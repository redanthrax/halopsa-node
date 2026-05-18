import { INodeProperties } from 'n8n-workflow';

export const intuneDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['intune'] } }, default: {} },
];
