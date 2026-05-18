import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Datto Commerce Details ID', name: 'dattoCommerceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['dattoCommerceDetails'], operation: ['delete'] } }, default: 0 },
];
