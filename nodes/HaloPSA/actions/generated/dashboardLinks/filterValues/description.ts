import { INodeProperties } from 'n8n-workflow';

export const filterValuesDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['dashboardLinks'], operation: ['filterValues'] } }, default: {} },
];
