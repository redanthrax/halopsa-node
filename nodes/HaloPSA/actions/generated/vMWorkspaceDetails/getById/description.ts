import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'VMWorkspace Details ID', name: 'vMWorkspaceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['vMWorkspaceDetails'], operation: ['getById'] } }, default: 0 },
];
