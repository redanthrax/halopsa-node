import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Datto Commerce Details ID', name: 'dattoCommerceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['dattoCommerceDetails'], operation: ['getById'] } }, default: 0 },
];
