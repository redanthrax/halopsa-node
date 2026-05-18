import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Outgoing ID', name: 'outgoingId', type: 'number', required: true,
		displayOptions: { show: { resource: ['outgoing'], operation: ['delete'] } }, default: 0 },
];
