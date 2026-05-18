import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Slack Chat App ID', name: 'slackChatAppId', type: 'number', required: true,
		displayOptions: { show: { resource: ['slackChatApp'], operation: ['getById'] } }, default: 0 },
];
