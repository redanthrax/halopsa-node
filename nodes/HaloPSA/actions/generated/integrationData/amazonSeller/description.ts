import { INodeProperties } from 'n8n-workflow';

export const amazonSellerDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['amazonSeller'] } }, default: {} },
];
