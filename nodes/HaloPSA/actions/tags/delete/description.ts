import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Tag ID',
		name: 'tagId',
		type: 'number',
		displayOptions: { show: { resource: ['tags'], operation: ['delete'] } },
		required: true,
		default: 0,
		description: 'ID of the tag to delete',
	},
];
