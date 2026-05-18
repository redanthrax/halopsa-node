import { INodeProperties } from 'n8n-workflow';

export const voteDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['tickets'], operation: ['vote'] } },
		default: 0,
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['tickets'], operation: ['vote'] } },
		default: {},
		description: 'Additional JSON fields sent in the request body (merged with ticket ID)',
	},
];
