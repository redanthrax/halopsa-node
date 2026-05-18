import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'KBArticle Anon ID', name: 'kBArticleAnonId', type: 'number', required: true,
		displayOptions: { show: { resource: ['kBArticleAnon'], operation: ['getById'] } }, default: 0 },
];
