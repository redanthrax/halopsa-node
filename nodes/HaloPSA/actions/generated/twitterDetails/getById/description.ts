import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Twitter Details ID', name: 'twitterDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['twitterDetails'], operation: ['getById'] } }, default: 0 },
];
