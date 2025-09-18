import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Agent ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['agents'],
				operation: ['delete'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the agent to delete',
	},
];