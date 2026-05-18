import { INodeProperties } from 'n8n-workflow';

export const datagateDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['datagate'] } }, default: {} },
];
