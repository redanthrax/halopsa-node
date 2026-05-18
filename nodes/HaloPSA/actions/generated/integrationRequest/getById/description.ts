import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Integration Request ID', name: 'integrationRequestId', type: 'number', required: true,
		displayOptions: { show: { resource: ['integrationRequest'], operation: ['getById'] } }, default: 0 },
];
