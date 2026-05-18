import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Slack Details ID', name: 'slackDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['slackDetails'], operation: ['delete'] } }, default: 0 },
];
