import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Fortnox Details ID', name: 'fortnoxDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['fortnoxDetails'], operation: ['getById'] } }, default: 0 },
];
