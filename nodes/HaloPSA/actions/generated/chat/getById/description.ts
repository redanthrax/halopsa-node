import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Chat ID', name: 'chatId', type: 'number', required: true,
		displayOptions: { show: { resource: ['chat'], operation: ['getById'] } }, default: 0 },
];
