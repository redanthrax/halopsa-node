import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Virtual Agent ID', name: 'virtualAgentId', type: 'number', required: true,
		displayOptions: { show: { resource: ['virtualAgent'], operation: ['getById'] } }, default: 0 },
];
