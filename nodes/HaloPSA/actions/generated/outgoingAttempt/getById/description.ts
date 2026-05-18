import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Outgoing Attempt ID', name: 'outgoingAttemptId', type: 'number', required: true,
		displayOptions: { show: { resource: ['outgoingAttempt'], operation: ['getById'] } }, default: 0 },
];
