import { INodeProperties } from 'n8n-workflow';

export const federatedcredentialsDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['application'], operation: ['federatedcredentials'] } }, default: {} },
];
