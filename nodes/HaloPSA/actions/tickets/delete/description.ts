import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['tickets'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'The ID of the ticket to delete',
	},
	{
		displayName: 'Reason',
		name: 'reason',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['tickets'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'Reason for deleting the ticket (optional)',
	},
];