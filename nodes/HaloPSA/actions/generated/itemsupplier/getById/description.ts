import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'itemsupplier ID', name: 'itemsupplierId', type: 'number', required: true,
		displayOptions: { show: { resource: ['itemsupplier'], operation: ['getById'] } }, default: 0 },
];
