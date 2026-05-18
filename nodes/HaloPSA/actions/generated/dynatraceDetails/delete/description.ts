import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Dynatrace Details ID', name: 'dynatraceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['dynatraceDetails'], operation: ['delete'] } }, default: 0 },
];
