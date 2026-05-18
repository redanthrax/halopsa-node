import { INodeProperties } from 'n8n-workflow';

export const voteDescription: INodeProperties[] = [
	{
		displayName: 'Article ID',
		name: 'articleId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['knowledgeBase'], operation: ['vote'] } },
		default: 0,
	},
	{
		displayName: 'Useful',
		name: 'useful',
		type: 'boolean',
		displayOptions: { show: { resource: ['knowledgeBase'], operation: ['vote'] } },
		default: true,
		description: 'Whether the vote marks the article as useful',
	},
];
