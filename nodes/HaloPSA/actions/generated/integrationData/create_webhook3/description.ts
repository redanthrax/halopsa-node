import { INodeProperties } from 'n8n-workflow';

export const create_webhook3Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['create_webhook3'] } }, default: {} },
];
