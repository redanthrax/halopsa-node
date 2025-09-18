import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		required: true,
		default: '',
		description: 'The name of the client',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['client'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Colour',
				name: 'colour',
				type: 'color',
				default: '',
				description: 'Color code for the client (e.g., #E83C4A)',
			},
			{
				displayName: 'Inactive',
				name: 'inactive',
				type: 'boolean',
				default: false,
				description: 'Whether the client is inactive',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				description: 'Notes about the client',
			},
			{
				displayName: 'Top Level ID',
				name: 'toplevel_id',
				type: 'number',
				default: 1,
				description: 'The top level ID for the client',
			},
		],
	},
];