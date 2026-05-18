import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Background Task ID', name: 'backgroundTaskId', type: 'number', required: true,
		displayOptions: { show: { resource: ['backgroundTask'], operation: ['getById'] } }, default: 0 },
];
