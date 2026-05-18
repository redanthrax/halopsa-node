import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'CAB ID', name: 'cABId', type: 'number', required: true,
		displayOptions: { show: { resource: ['cAB'], operation: ['getById'] } }, default: 0 },
];
