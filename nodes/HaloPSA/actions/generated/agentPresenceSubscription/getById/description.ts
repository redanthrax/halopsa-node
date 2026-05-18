import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Agent Presence Subscription ID', name: 'agentPresenceSubscriptionId', type: 'number', required: true,
		displayOptions: { show: { resource: ['agentPresenceSubscription'], operation: ['getById'] } }, default: 0 },
];
