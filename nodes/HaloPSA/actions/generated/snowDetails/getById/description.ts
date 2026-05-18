import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Snow Details ID', name: 'snowDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['snowDetails'], operation: ['getById'] } }, default: 0 },
];
