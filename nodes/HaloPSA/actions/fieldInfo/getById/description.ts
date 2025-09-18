import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Field Info ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['fieldInfo'],
				operation: ['getById'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the field info to retrieve',
	},
	{
		displayName: 'Additional Options',
		name: 'additionalOptions',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['fieldInfo'],
				operation: ['getById'],
			},
		},
		options: [
			{
				displayName: 'Entity ID',
				name: 'entityid',
				type: 'number',
				default: 0,
				description: 'Entity ID filter',
			},
			{
				displayName: 'Get Lookup Values',
				name: 'getlookupvalues',
				type: 'boolean',
				default: false,
				description: 'Whether to get lookup values',
			},
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include additional details',
			},
			{
				displayName: 'Live Custom Fields',
				name: 'livecustomfields',
				type: 'string',
				default: '',
				description: 'Live custom fields parameter',
			},
			{
				displayName: 'User ID',
				name: 'userid',
				type: 'number',
				default: 0,
				description: 'User ID filter',
			},
		],
	},
];