import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'View Columns ID', name: 'viewColumnId', type: 'number', required: true,
		displayOptions: { show: { resource: ['viewColumns'], operation: ['getById'] } }, default: 0 },
];
