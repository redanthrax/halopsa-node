import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'To-Do Group ID', name: 'todoGroupId', type: 'number', required: true,
		displayOptions: { show: { resource: ['todoGroups'], operation: ['delete'] } }, default: 0 },
];
