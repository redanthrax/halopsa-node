import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Incoming Event ID', name: 'incomingEventId', type: 'number', required: true,
		displayOptions: { show: { resource: ['incomingEvent'], operation: ['delete'] } }, default: 0 },
];
