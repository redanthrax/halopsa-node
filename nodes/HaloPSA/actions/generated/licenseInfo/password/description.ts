import { INodeProperties } from 'n8n-workflow';

export const passwordDescription: INodeProperties[] = [
	{ displayName: 'Query Parameters', name: 'queryParameters', type: 'json',
		displayOptions: { show: { resource: ['licenseInfo'], operation: ['password'] } }, default: {} },
];
