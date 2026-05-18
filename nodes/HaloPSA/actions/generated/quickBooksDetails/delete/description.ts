import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Quick Books Details ID', name: 'quickBooksDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['quickBooksDetails'], operation: ['delete'] } }, default: 0 },
];
