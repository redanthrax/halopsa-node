import { INodeProperties } from 'n8n-workflow';

export const getOneSpotlightDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['versionInfo'], operation: ['getOneSpotlight'] } }, default: {} },
];
