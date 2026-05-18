import { INodeProperties } from 'n8n-workflow';

export const createTicketDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['haloIntegration'], operation: ['createTicket'] } }, default: {} },
];
