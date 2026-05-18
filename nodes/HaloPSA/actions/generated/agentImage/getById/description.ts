import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Agent Image ID', name: 'agentImageId', type: 'number', required: true,
		displayOptions: { show: { resource: ['agentImage'], operation: ['getById'] } }, default: 0 },
];
