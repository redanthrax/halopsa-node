import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'External Chat Message ID', name: 'externalChatMessageId', type: 'number', required: true,
		displayOptions: { show: { resource: ['externalChatMessage'], operation: ['delete'] } }, default: 0 },
];
