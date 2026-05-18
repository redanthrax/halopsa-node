import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['items'], operation: ['delete'] } },
		default: 0,
	},
];
