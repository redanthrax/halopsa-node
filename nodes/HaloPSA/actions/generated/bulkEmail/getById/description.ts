import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Bulk Email ID', name: 'bulkEmailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['bulkEmail'], operation: ['getById'] } }, default: 0 },
];
