import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Report Repository ID', name: 'reportRepositoryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['reportRepository'], operation: ['getById'] } }, default: 0 },
];
