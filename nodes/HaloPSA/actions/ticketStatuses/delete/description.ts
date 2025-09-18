import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Ticket Status ID',
		name: 'ticketStatusId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['ticketStatuses'],
				operation: ['delete'],
			},
		},
		default: '',
		description: 'ID of the ticket status to delete',
	},
];