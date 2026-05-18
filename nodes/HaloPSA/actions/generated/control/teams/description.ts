import { INodeProperties } from 'n8n-workflow';

export const teamsDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['control'], operation: ['teams'] } }, default: {} },
];
