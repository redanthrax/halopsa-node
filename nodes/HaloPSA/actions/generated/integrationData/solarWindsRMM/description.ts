import { INodeProperties } from 'n8n-workflow';

export const solarWindsRMMDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['solarWindsRMM'] } }, default: {} },
];
