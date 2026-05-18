import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Application ID', name: 'applicationId', type: 'number', required: true,
		displayOptions: { show: { resource: ['application'], operation: ['delete'] } }, default: 0 },
];
