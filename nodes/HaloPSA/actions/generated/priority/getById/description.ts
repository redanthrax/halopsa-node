import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Priority ID', name: 'priorityId', type: 'number', required: true,
		displayOptions: { show: { resource: ['priority'], operation: ['getById'] } }, default: 0 },
];
