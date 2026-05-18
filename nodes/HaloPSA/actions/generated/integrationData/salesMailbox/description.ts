import { INodeProperties } from 'n8n-workflow';

export const salesMailboxDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['salesMailbox'] } }, default: {} },
];
