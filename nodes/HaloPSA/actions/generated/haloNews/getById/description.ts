import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Halo News ID', name: 'haloNewId', type: 'number', required: true,
		displayOptions: { show: { resource: ['haloNews'], operation: ['getById'] } }, default: 0 },
];
