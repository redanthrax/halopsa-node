import { INodeProperties } from 'n8n-workflow';

export const exchangeCalendarsDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['exchangeCalendars'] } }, default: {} },
];
