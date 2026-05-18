import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Incoming Event ID', name: 'incomingEventId', type: 'number', required: true,
		displayOptions: { show: { resource: ['incomingEvent'], operation: ['getById'] } }, default: 0 },
];
