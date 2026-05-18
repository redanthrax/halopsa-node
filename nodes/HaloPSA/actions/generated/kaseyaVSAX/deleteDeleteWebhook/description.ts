import { INodeProperties } from 'n8n-workflow';

export const deleteDeleteWebhookDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['kaseyaVSAX'], operation: ['deleteDeleteWebhook'] } }, default: {} },
];
