import { INodeProperties } from 'n8n-workflow';

export const quickBooksOnlineDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['quickBooksOnline'] } }, default: {} },
];
