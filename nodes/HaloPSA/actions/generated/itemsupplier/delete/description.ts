import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'itemsupplier ID', name: 'itemsupplierId', type: 'number', required: true,
		displayOptions: { show: { resource: ['itemsupplier'], operation: ['delete'] } }, default: 0 },
];
