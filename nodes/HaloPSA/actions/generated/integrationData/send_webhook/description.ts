import { INodeProperties } from 'n8n-workflow';

export const send_webhookDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['send_webhook'] } }, default: {} },
];
