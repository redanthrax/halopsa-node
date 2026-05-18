import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Team ID',
		name: 'teamId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['teams'], operation: ['delete'] } },
		default: 0,
	},
];
