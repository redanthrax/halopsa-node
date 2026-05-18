import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Schedule ID', name: 'scheduleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['contractSchedules'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['contractSchedules'], operation: ['getById'] } }, default: false },
];
