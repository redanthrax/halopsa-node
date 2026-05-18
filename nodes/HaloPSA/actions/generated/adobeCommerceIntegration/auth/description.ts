import { INodeProperties } from 'n8n-workflow';

export const authDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['adobeCommerceIntegration'], operation: ['auth'] } }, default: {} },
];
