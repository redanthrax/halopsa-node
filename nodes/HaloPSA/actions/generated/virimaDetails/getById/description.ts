import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Virima Details ID', name: 'virimaDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['virimaDetails'], operation: ['getById'] } }, default: 0 },
];
