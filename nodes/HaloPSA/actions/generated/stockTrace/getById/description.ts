import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Stock Trace ID', name: 'stockTraceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['stockTrace'], operation: ['getById'] } }, default: 0 },
];
