import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Schedule ID', name: 'scheduleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['contractSchedules'], operation: ['delete'] } }, default: 0 },
];
