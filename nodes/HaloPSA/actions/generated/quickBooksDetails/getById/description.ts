import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Quick Books Details ID', name: 'quickBooksDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['quickBooksDetails'], operation: ['getById'] } }, default: 0 },
];
