import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Schedule ID', name: 'scheduleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['schedule'], operation: ['getById'] } }, default: 0 },
];
