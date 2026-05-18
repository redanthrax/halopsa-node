import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Ingram Micro Details ID', name: 'ingramMicroDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['ingramMicroDetails'], operation: ['getById'] } }, default: 0 },
];
