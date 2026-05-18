import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Features ID', name: 'featureId', type: 'number', required: true,
		displayOptions: { show: { resource: ['features'], operation: ['getById'] } }, default: 0 },
];
