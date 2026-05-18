import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Service ID', name: 'serviceId', type: 'number', required: true,
		displayOptions: { show: { resource: ['service'], operation: ['getById'] } }, default: 0 },
];
