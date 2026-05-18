import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Release Type ID', name: 'releaseTypeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['releaseType'], operation: ['getById'] } }, default: 0 },
];
