import { INodeProperties } from 'n8n-workflow';

export const paymentsDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['payments'] } }, default: {} },
];
