import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['knowledgeBase'], operation: ['create'] } },
		default: {},
		description: 'KBEntry fields as JSON (name, description_html, client_id, etc.)',
	},
];
