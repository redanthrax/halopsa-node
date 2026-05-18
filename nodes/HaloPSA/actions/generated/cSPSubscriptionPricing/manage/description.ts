import { INodeProperties } from 'n8n-workflow';

export const manageDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['cSPSubscriptionPricing'], operation: ['manage'] } }, default: {} },
];
