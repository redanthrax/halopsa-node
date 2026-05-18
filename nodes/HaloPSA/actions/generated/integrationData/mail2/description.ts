import { INodeProperties } from 'n8n-workflow';

export const mail2Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['mail2'] } }, default: {} },
];
