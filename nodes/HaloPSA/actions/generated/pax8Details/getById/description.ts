import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Pax8Details ID', name: 'pax8DetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['pax8Details'], operation: ['getById'] } }, default: 0 },
];
