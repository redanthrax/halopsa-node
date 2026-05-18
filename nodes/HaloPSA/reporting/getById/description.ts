import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Report ID',
		name: 'reportId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['reporting'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'The ID of the saved report definition to retrieve',
	},
];
