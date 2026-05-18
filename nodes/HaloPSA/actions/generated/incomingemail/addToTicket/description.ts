import { INodeProperties } from 'n8n-workflow';

export const addToTicketDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['incomingemail'], operation: ['addToTicket'] } }, default: {} },
];
