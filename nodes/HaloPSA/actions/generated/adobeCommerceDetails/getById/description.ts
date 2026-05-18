import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Adobe Commerce Details ID', name: 'adobeCommerceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['adobeCommerceDetails'], operation: ['getById'] } }, default: 0 },
];
