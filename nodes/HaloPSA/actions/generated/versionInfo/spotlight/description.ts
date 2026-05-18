import { INodeProperties } from 'n8n-workflow';

export const spotlightDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['versionInfo'], operation: ['spotlight'] } }, default: {} },
];
