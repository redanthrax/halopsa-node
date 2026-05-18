import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Azure Dev Ops Details ID', name: 'azureDevOpsDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['azureDevOpsDetails'], operation: ['getById'] } }, default: 0 },
];
