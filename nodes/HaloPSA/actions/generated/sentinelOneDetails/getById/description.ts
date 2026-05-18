import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Sentinel One Details ID', name: 'sentinelOneDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sentinelOneDetails'], operation: ['getById'] } }, default: 0 },
];
