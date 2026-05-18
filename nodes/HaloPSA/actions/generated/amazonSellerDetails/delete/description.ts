import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Amazon Seller Details ID', name: 'amazonSellerDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['amazonSellerDetails'], operation: ['delete'] } }, default: 0 },
];
