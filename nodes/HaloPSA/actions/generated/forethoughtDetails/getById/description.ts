import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Forethought Details ID', name: 'forethoughtDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['forethoughtDetails'], operation: ['getById'] } }, default: 0 },
];
