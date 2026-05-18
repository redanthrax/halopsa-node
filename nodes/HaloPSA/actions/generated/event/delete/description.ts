import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Event ID', name: 'eventId', type: 'number', required: true,
		displayOptions: { show: { resource: ['event'], operation: ['delete'] } }, default: 0 },
];
