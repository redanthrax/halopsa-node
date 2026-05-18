import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Sail Point Details ID', name: 'sailPointDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['sailPointDetails'], operation: ['getById'] } }, default: 0 },
];
