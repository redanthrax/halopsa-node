import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Config Commit ID', name: 'configCommitId', type: 'number', required: true,
		displayOptions: { show: { resource: ['configCommit'], operation: ['delete'] } }, default: 0 },
];
