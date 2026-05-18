import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['lookups'], operation: ['create'] } },
		default: {},
		description: 'JSON fields for the new lookup record',
	},
];
