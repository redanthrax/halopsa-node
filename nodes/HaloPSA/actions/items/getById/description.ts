import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['items'], operation: ['getById'] } },
		default: 0,
	},
];
