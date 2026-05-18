import { INodeProperties } from 'n8n-workflow';

export const pRTGDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['pRTG'] } }, default: {} },
];
