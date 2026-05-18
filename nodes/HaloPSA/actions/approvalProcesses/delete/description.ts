import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Process ID', name: 'processId', type: 'number', required: true,
		displayOptions: { show: { resource: ['approvalProcesses'], operation: ['delete'] } }, default: 0 },
];
