import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Ingram Micro Reseller Details ID', name: 'ingramMicroResellerDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['ingramMicroResellerDetails'], operation: ['getById'] } }, default: 0 },
];
