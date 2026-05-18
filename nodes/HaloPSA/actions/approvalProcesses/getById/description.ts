import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Process ID', name: 'processId', type: 'number', required: true,
		displayOptions: { show: { resource: ['approvalProcesses'], operation: ['getById'] } }, default: 0 },
	{ displayName: 'Include Details', name: 'includeDetails', type: 'boolean',
		displayOptions: { show: { resource: ['approvalProcesses'], operation: ['getById'] } }, default: false },
];
