import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Application ID', name: 'applicationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['application'], operation: ['getById'] } }, default: 0 },
];
