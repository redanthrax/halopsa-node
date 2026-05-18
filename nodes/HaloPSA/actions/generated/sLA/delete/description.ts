import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'SLA ID', name: 'sLAId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sLA'], operation: ['delete'] } }, default: 0 },
];
