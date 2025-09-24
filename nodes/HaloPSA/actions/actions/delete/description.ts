import { INodeProperties } from 'n8n-workflow';

export const description: INodeProperties[] = [
	{
		displayName: 'Action ID',
		name: 'actionId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['actions'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'The ID of the action to delete',
	},
];