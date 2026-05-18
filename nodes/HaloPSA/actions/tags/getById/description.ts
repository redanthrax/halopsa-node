import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Tag ID',
		name: 'tagId',
		type: 'number',
		displayOptions: { show: { resource: ['tags'], operation: ['getById'] } },
		required: true,
		default: 0,
		description: 'ID of the tag',
	},
];
