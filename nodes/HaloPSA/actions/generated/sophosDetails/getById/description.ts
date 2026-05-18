import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Sophos Details ID', name: 'sophosDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sophosDetails'], operation: ['getById'] } }, default: 0 },
];
