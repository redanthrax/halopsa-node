import { INodeProperties } from 'n8n-workflow';

export const jira4Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['jira4'] } }, default: {} },
];
