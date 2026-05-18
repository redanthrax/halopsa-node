import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'VMWorkspace Details ID', name: 'vMWorkspaceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['vMWorkspaceDetails'], operation: ['delete'] } }, default: 0 },
];
