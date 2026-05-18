import { INodeProperties } from 'n8n-workflow';

export const isTypingDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['chatMessage'], operation: ['isTyping'] } }, default: {} },
];
