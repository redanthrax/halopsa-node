import { INodeProperties } from 'n8n-workflow';

export const dynamicsCRMDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['dynamicsCRM'] } }, default: {} },
];
