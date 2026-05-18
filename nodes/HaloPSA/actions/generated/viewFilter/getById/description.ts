import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'View Filter ID', name: 'viewFilterId', type: 'number', required: true,
		displayOptions: { show: { resource: ['viewFilter'], operation: ['getById'] } }, default: 0 },
];
