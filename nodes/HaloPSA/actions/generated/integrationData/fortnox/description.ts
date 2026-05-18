import { INodeProperties } from 'n8n-workflow';

export const fortnoxDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['fortnox'] } }, default: {} },
];
