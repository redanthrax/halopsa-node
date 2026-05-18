import { INodeProperties } from 'n8n-workflow';

export const createWebhookDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['kaseyaVSAX'], operation: ['createWebhook'] } }, default: {} },
];
