import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{ displayName: 'Ticket Rules ID', name: 'ticketRuleId', type: 'number', required: true,
		displayOptions: { show: { resource: ['ticketRules'], operation: ['getById'] } }, default: 0 },
];
