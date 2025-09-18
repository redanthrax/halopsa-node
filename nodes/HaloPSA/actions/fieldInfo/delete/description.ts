import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Field Info ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['fieldInfo'],
				operation: ['delete'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the field info to delete',
	},
];