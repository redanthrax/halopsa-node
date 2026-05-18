import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'To-Do Group ID', name: 'todoGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['todoGroups'], operation: ['getById'] } }, default: 0 },
];
