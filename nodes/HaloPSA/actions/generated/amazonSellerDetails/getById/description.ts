import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Amazon Seller Details ID', name: 'amazonSellerDetailId', type: 'number', required: true,
		displayOptions: { show: { resource: ['amazonSellerDetails'], operation: ['getById'] } }, default: 0 },
];
