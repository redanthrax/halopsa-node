import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Service Status ID', name: 'serviceStatuId', type: 'number', required: true,
		displayOptions: { show: { resource: ['serviceStatus'], operation: ['getById'] } }, default: 0 },
];
