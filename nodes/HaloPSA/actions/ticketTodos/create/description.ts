import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: { show: { resource: ['ticketTodos'], operation: ['create'] } },
		default: 0,
		description: 'Ticket to attach the to-do item to',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['ticketTodos'], operation: ['create'] } },
		default: {},
		description: 'Additional JSON fields for the to-do record',
	},
];
