import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Webhook Repository ID', name: 'webhookRepositoryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['webhookRepository'], operation: ['getById'] } }, default: 0 },
];
