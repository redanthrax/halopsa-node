import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Sentinel One Details ID', name: 'sentinelOneDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sentinelOneDetails'], operation: ['delete'] } }, default: 0 },
];
