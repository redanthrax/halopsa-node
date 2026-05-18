import { INodeProperties } from 'n8n-workflow';

export const jamfDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['jamf'] } }, default: {} },
];
