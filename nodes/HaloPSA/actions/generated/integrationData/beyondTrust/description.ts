import { INodeProperties } from 'n8n-workflow';

export const beyondTrustDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['integrationData'], operation: ['beyondTrust'] } }, default: {} },
];
