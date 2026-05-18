import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Supplier ID', name: 'supplierId', type: 'number', required: true,
		displayOptions: { show: { resource: ['suppliers'], operation: ['delete'] } }, default: 0 },
];
