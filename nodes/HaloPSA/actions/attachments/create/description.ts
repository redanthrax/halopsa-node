import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'Ticket to attach the file to',
	},
	{
		displayName: 'Filename',
		name: 'filename',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'Name of the file',
	},
	{
		displayName: 'Data (Base64)',
		name: 'dataBase64',
		type: 'string',
		typeOptions: {
			rows: 4,
		},
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'File contents encoded as base64',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Note',
				name: 'note',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Show for Users',
				name: 'showforusers',
				type: 'boolean',
				default: true,
			},
			{
				displayName: 'Action ID',
				name: 'action_id',
				type: 'number',
				default: 0,
			},
		],
	},
];
