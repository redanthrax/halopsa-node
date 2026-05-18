import { INodeProperties } from 'n8n-workflow';

export const salesMailbox2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['salesMailbox2'] } }, default: {} },
];
