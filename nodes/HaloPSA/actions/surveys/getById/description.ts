import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Feedback ID',
		name: 'feedbackId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['surveys'], operation: ['getById'] } },
		default: 0,
	},
];
