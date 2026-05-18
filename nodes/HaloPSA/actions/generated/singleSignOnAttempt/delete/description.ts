import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Single Sign On Attempt ID', name: 'singleSignOnAttemptId', type: 'number', required: true,
		displayOptions: { show: { resource: ['singleSignOnAttempt'], operation: ['delete'] } }, default: 0 },
];
