import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Report Data ID', name: 'reportDataId', type: 'number', required: true,
		displayOptions: { show: { resource: ['reportData'], operation: ['getById'] } }, default: 0 },
];
