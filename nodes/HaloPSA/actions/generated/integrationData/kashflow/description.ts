import { INodeProperties } from 'n8n-workflow';

export const kashflowDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['kashflow'] } }, default: {} },
];
