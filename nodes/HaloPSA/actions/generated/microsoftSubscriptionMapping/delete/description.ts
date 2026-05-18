import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Microsoft Subscription Mapping ID', name: 'microsoftSubscriptionMappingId', type: 'number', required: true,
		displayOptions: { show: { resource: ['microsoftSubscriptionMapping'], operation: ['delete'] } }, default: 0 },
];
