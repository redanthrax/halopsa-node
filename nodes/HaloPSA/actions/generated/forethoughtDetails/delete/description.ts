import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Forethought Details ID', name: 'forethoughtDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['forethoughtDetails'], operation: ['delete'] } }, default: 0 },
];
