import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Item Stock ID', name: 'itemStockId', type: 'number', required: true,
		displayOptions: { show: { resource: ['itemStock'], operation: ['delete'] } }, default: 0 },
];
