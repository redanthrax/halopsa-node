import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Kandji Details ID', name: 'kandjiDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['kandjiDetails'], operation: ['getById'] } }, default: 0 },
];
