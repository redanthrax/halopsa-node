import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Event ID', name: 'eventId', type: 'number', required: true,
		displayOptions: { show: { resource: ['event'], operation: ['getById'] } }, default: 0 },
];
