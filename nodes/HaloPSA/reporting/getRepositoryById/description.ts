import { INodeProperties } from 'n8n-workflow';

export const getRepositoryByIdDescription: INodeProperties[] = [
	{
		displayName: 'Report ID',
		name: 'reportId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['reporting'], operation: ['getRepositoryById'] } },
		default: 0,
	},
];
