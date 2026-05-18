import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{ displayName: 'Agent Presence Subscription ID', name: 'agentPresenceSubscriptionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['agentPresenceSubscription'], operation: ['delete'] } }, default: 0 },
];
