import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Agent Event Subscription ID', name: 'agentEventSubscriptionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['agentEventSubscription'], operation: ['getById'] } }, default: 0 },
];
