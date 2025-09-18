import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Site ID',
		name: 'siteId',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['sites'],
				operation: ['getById'],
			},
		},
		default: 1,
		required: true,
		description: 'The ID of the site to retrieve',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['sites'],
				operation: ['getById'],
			},
		},
		options: [
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include extra objects in the response',
			},
		],
	},
];