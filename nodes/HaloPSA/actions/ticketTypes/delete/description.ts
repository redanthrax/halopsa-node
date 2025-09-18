import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Ticket Type ID',
		name: 'ticketTypeId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['ticketTypes'],
				operation: ['delete'],
			},
		},
		default: 0,
		required: true,
		description: 'ID of the ticket type to delete',
	},
];