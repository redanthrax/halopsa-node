import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Workflow Target ID', name: 'workflowTargetId', type: 'number', required: true,
		displayOptions: { show: { resource: ['workflowTarget'], operation: ['delete'] } }, default: 0 },
];
