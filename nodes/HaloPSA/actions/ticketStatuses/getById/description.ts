import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Ticket Status ID',
		name: 'statusId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['ticketStatuses'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'The ID of the ticket status to retrieve',
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['ticketStatuses'],
				operation: ['getById'],
			},
		},
		options: [
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include additional details in the response',
			},
		],
	},
];