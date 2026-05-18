import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Avalara Details ID', name: 'avalaraDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['avalaraDetails'], operation: ['getById'] } }, default: 0 },
];
