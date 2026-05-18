import { INodeProperties } from 'n8n-workflow';

export const formatJsonArrayDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['formatJsonArray'] } }, default: {} },
];
