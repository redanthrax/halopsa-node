import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'SLA ID', name: 'sLAId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sLA'], operation: ['getById'] } }, default: 0 },
];
