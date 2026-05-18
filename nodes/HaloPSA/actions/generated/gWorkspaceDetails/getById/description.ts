import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'GWorkspace Details ID', name: 'gWorkspaceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['gWorkspaceDetails'], operation: ['getById'] } }, default: 0 },
];
