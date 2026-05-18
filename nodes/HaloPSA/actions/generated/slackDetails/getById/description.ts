import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Slack Details ID', name: 'slackDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['slackDetails'], operation: ['getById'] } }, default: 0 },
];
