import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Google Business Details ID', name: 'googleBusinessDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['googleBusinessDetails'], operation: ['getById'] } }, default: 0 },
];
