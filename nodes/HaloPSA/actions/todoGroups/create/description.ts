import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['todoGroups'], operation: ['create'] } },
		default: {}, description: 'To-do group fields for POST /ToDoGroup' },
];
