import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'GWorkspace Details ID', name: 'gWorkspaceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['gWorkspaceDetails'], operation: ['delete'] } }, default: 0 },
];
