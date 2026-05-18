import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Feedback ID',
		name: 'feedbackId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['surveys'], operation: ['delete'] } },
		default: 0,
	},
];
