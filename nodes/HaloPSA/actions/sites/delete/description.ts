import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Site ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sites'],
				operation: ['delete'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the site to delete',
	},
];