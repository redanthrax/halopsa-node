import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'FAQLists ID', name: 'fAQListId', type: 'number', required: true,
		displayOptions: { show: { resource: ['fAQLists'], operation: ['getById'] } }, default: 0 },
];
