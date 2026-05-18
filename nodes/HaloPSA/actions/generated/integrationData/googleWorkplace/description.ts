import { INodeProperties } from 'n8n-workflow';

export const googleWorkplaceDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['googleWorkplace'] } }, default: {} },
];
