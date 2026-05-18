import { INodeProperties } from 'n8n-workflow';

export const jira6Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['jira6'] } }, default: {} },
];
