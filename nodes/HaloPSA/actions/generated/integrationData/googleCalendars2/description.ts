import { INodeProperties } from 'n8n-workflow';

export const googleCalendars2Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['googleCalendars2'] } }, default: {} },
];
