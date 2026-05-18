import { INodeProperties } from 'n8n-workflow';

export const create_setup_intentDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['create_setup_intent'] } }, default: {} },
];
