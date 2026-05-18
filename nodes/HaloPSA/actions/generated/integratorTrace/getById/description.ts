import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Integrator Trace ID', name: 'integratorTraceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integratorTrace'], operation: ['getById'] } }, default: 0 },
];
