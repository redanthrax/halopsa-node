import { INodeProperties } from 'n8n-workflow';

export const create_webhook2Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['create_webhook2'] } }, default: {} },
];
