import { INodeProperties } from 'n8n-workflow';

export const pax82Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['pax82'] } }, default: {} },
];
