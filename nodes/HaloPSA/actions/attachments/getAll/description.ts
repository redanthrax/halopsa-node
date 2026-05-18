import { INodeProperties } from 'n8n-workflow';

export const getAllDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['getAll'],
			},
		},
		default: false,
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: {
			minValue: 1,
		},
		default: 50,
		description: 'Max number of results to return',
	},
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['getAll'],
			},
		},
		default: 0,
		description: 'Filter by ticket ID (0 = no filter)',
	},
	{
		displayName: 'Action ID',
		name: 'actionId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['getAll'],
			},
		},
		default: 0,
		description: 'Filter by action ID; requires ticket ID per API (0 = no filter)',
	},
	{
		displayName: 'File Type',
		name: 'fileType',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['getAll'],
			},
		},
		default: '',
		description: 'Optional file type filter',
	},
];
