import { INodeProperties } from 'n8n-workflow';

export const customerDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['customer'] } }, default: {} },
];
