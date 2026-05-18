import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Exact Details ID', name: 'exactDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['exactDetails'], operation: ['getById'] } }, default: 0 },
];
