import { INodeProperties } from 'n8n-workflow';

export const xeroDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['xero'] } }, default: {} },
];
