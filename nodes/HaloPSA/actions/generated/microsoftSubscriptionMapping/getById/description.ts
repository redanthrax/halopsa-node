import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Microsoft Subscription Mapping ID', name: 'microsoftSubscriptionMappingId', type: 'number', required: true,
		displayOptions: { show: { resource: ['microsoftSubscriptionMapping'], operation: ['getById'] } }, default: 0 },
];
