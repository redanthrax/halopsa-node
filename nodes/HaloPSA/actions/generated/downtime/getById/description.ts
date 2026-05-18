import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Downtime ID', name: 'downtimeId', type: 'number', required: true,
		displayOptions: { show: { resource: ['downtime'], operation: ['getById'] } }, default: 0 },
];
