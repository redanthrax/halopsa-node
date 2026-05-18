import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Schedule Occurrence ID', name: 'scheduleOccurrenceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['scheduleOccurrence'], operation: ['getById'] } }, default: 0 },
];
