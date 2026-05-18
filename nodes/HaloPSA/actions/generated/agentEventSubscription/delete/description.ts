import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Agent Event Subscription ID', name: 'agentEventSubscriptionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['agentEventSubscription'], operation: ['delete'] } }, default: 0 },
];
