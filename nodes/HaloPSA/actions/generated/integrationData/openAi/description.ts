import { INodeProperties } from 'n8n-workflow';

export const openAiDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['openAi'] } }, default: {} },
];
