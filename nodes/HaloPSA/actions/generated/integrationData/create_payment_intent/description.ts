import { INodeProperties } from 'n8n-workflow';

export const create_payment_intentDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['create_payment_intent'] } }, default: {} },
];
