import { INodeProperties } from 'n8n-workflow';

export const recordViewDescription: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['projects'], operation: ['recordView'] } },
		default: 0,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['projects'], operation: ['recordView'] } },
		default: {},
		description: 'Additional JSON fields sent in the request body (merged with record ID)',
	},
];
