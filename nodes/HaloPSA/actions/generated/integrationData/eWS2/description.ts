import { INodeProperties } from 'n8n-workflow';

export const eWS2Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['eWS2'] } }, default: {} },
];
