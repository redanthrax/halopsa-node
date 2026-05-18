import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Jira Details ID', name: 'jiraDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['jiraDetails'], operation: ['getById'] } }, default: 0 },
];
