import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Item Stock ID', name: 'itemStockId', type: 'number', required: true,
		displayOptions: { show: { resource: ['itemStock'], operation: ['getById'] } }, default: 0 },
];
