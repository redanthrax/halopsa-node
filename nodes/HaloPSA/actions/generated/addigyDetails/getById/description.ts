import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Addigy Details ID', name: 'addigyDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['addigyDetails'], operation: ['getById'] } }, default: 0 },
];
