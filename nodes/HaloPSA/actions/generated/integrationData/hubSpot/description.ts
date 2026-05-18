import { INodeProperties } from 'n8n-workflow';

export const hubSpotDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['hubSpot'] } }, default: {} },
];
