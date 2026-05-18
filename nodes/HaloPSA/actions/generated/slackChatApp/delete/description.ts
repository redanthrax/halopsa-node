import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Slack Chat App ID', name: 'slackChatAppId', type: 'number', required: true,
		displayOptions: { show: { resource: ['slackChatApp'], operation: ['delete'] } }, default: 0 },
];
