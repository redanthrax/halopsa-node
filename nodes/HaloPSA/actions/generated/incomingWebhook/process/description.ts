import { INodeProperties } from 'n8n-workflow';

export const processDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['incomingWebhook'], operation: ['process'] } }, default: {} },
];
