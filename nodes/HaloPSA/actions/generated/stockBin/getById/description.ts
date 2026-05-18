import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Stock Bin ID', name: 'stockBinId', type: 'number', required: true,
		displayOptions: { show: { resource: ['stockBin'], operation: ['getById'] } }, default: 0 },
];
