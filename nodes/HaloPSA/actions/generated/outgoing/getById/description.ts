import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Outgoing ID', name: 'outgoingId', type: 'number', required: true,
		displayOptions: { show: { resource: ['outgoing'], operation: ['getById'] } }, default: 0 },
];
