import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Item Stock History ID', name: 'itemStockHistoryId', type: 'number', required: true,
		displayOptions: { show: { resource: ['itemStockHistory'], operation: ['getById'] } }, default: 0 },
];
