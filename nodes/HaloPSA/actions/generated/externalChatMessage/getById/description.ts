import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'External Chat Message ID', name: 'externalChatMessageId', type: 'number', required: true,
		displayOptions: { show: { resource: ['externalChatMessage'], operation: ['getById'] } }, default: 0 },
];
