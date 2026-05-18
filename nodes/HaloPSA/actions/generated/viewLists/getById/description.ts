import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'View Lists ID', name: 'viewListId', type: 'number', required: true,
		displayOptions: { show: { resource: ['viewLists'], operation: ['getById'] } }, default: 0 },
];
