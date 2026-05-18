import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Release ID', name: 'releaseId', type: 'number', required: true,
		displayOptions: { show: { resource: ['releases'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['releases'], operation: ['getById'] } }, default: false },
];
