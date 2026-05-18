import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Incoming Webhook ID', name: 'incomingWebhookId', type: 'number', required: true,
		displayOptions: { show: { resource: ['incomingWebhook'], operation: ['delete'] } }, default: 0 },
];
