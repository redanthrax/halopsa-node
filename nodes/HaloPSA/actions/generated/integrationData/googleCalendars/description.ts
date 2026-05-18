import { INodeProperties } from 'n8n-workflow';

export const googleCalendarsDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['googleCalendars'] } }, default: {} },
];
