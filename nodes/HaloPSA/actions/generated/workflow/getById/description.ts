import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Workflow ID', name: 'workflowId', type: 'number', required: true,
		displayOptions: { show: { resource: ['workflow'], operation: ['getById'] } }, default: 0 },
];
