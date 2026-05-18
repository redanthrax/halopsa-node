import { INodeProperties } from 'n8n-workflow';

export const subscriptionsDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['subscriptions'] } }, default: {} },
];
