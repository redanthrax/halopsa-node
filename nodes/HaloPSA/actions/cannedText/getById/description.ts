import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Canned Text ID',
		name: 'cannedTextId',
		type: 'number',
		displayOptions: { show: { resource: ['cannedText'], operation: ['getById'] } },
		required: true,
		default: 0,
		description: 'ID of the canned text',
	},
];
