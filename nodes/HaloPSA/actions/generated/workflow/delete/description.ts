import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Workflow ID', name: 'workflowId', type: 'number', required: true,
		displayOptions: { show: { resource: ['workflow'], operation: ['delete'] } }, default: 0 },
];
