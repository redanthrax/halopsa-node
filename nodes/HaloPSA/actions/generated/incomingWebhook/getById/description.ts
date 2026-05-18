import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Incoming Webhook ID', name: 'incomingWebhookId', type: 'number', required: true,
		displayOptions: { show: { resource: ['incomingWebhook'], operation: ['getById'] } }, default: 0 },
];
