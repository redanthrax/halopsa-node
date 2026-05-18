import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Article ID',
		name: 'articleId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['knowledgeBase'], operation: ['update'] } },
		default: 0,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'json',
		displayOptions: { show: { resource: ['knowledgeBase'], operation: ['update'] } },
		default: {},
	},
];
