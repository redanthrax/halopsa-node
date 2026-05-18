import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Stock Bin ID', name: 'stockBinId', type: 'number', required: true,
		displayOptions: { show: { resource: ['stockBin'], operation: ['delete'] } }, default: 0 },
];
