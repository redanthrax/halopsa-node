import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Custom Query ID', name: 'customQueryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['customQuery'], operation: ['getById'] } }, default: 0 },
];
