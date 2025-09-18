import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Asset ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['delete'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the asset to delete',
	},
];