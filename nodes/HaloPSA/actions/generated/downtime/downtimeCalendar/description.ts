import { INodeProperties } from 'n8n-workflow';

export const downtimeCalendarDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['downtime'], operation: ['downtimeCalendar'] } }, default: {} },
];
