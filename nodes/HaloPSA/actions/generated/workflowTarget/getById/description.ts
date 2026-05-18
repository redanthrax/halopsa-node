import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Workflow Target ID', name: 'workflowTargetId', type: 'number', required: true,
		displayOptions: { show: { resource: ['workflowTarget'], operation: ['getById'] } }, default: 0 },
];
