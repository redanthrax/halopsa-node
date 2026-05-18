import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Google Business Details ID', name: 'googleBusinessDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['googleBusinessDetails'], operation: ['delete'] } }, default: 0 },
];
