import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Adobe Commerce Details ID', name: 'adobeCommerceDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['adobeCommerceDetails'], operation: ['delete'] } }, default: 0 },
];
