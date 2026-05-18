import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Article ID',
		name: 'articleId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['knowledgeBase'], operation: ['delete'] } },
		default: 0,
	},
];
