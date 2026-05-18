import { INodeProperties } from 'n8n-workflow';

export const delete_webhookDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['delete_webhook'] } }, default: {} },
];
