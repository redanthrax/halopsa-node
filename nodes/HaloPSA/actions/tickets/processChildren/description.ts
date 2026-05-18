import { INodeProperties } from 'n8n-workflow';

export const processChildrenDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['tickets'], operation: ['processChildren'] } },
		default: 0,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['tickets'], operation: ['processChildren'] } },
		default: {},
		description: 'Additional JSON fields sent in the request body (merged with ticket ID)',
	},
];
