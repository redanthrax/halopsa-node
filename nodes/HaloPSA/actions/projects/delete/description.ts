import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['projects'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'The ID of the project to delete',
	},
];