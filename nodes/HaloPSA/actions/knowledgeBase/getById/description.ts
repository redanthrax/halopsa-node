import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Article ID',
		name: 'articleId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['knowledgeBase'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'The ID of the knowledge base article to retrieve',
	},
];
