import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Jira Details ID', name: 'jiraDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['jiraDetails'], operation: ['delete'] } }, default: 0 },
];
