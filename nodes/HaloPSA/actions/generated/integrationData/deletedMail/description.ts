import { INodeProperties } from 'n8n-workflow';

export const deletedMailDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['deletedMail'] } }, default: {} },
];
