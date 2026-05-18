import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Dynatrace Details ID', name: 'dynatraceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['dynatraceDetails'], operation: ['getById'] } }, default: 0 },
];
