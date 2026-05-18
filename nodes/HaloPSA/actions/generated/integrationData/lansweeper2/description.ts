import { INodeProperties } from 'n8n-workflow';

export const lansweeper2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['lansweeper2'] } }, default: {} },
];
