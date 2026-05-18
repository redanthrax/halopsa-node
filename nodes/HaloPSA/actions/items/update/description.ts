import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['items'], operation: ['update'] } },
		default: 0,
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'json',
		displayOptions: { show: { resource: ['items'], operation: ['update'] } },
		default: {},
		description: 'Fields to update on the item',
	},
];
