import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['notifications'], operation: ['create'] } },
		default: {},
		description: 'Additional JSON fields sent in the request body',
	},
];
