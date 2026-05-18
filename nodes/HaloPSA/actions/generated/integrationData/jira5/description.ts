import { INodeProperties } from 'n8n-workflow';

export const jira5Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['jira5'] } }, default: {} },
];
