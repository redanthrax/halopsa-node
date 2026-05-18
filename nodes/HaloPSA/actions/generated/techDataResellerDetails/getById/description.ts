import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Tech Data Reseller Details ID', name: 'techDataResellerDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['techDataResellerDetails'], operation: ['getById'] } }, default: 0 },
];
