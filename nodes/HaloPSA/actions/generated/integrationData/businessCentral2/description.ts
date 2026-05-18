import { INodeProperties } from 'n8n-workflow';

export const businessCentral2Description: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['businessCentral2'] } }, default: {} },
];
