import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'View Lists ID', name: 'viewListId', type: 'number', required: true,
		displayOptions: { show: { resource: ['viewLists'], operation: ['delete'] } }, default: 0 },
];
