import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Task Trace ID', name: 'taskTraceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['taskTrace'], operation: ['getById'] } }, default: 0 },
];
