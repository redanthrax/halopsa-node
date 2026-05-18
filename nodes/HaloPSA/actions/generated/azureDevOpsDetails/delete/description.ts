import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Azure Dev Ops Details ID', name: 'azureDevOpsDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['azureDevOpsDetails'], operation: ['delete'] } }, default: 0 },
];
