import { INodeProperties } from 'n8n-workflow';

export const xero3Description: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['xero3'] } }, default: {} },
];
