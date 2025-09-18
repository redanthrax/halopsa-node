import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Asset ID',
		name: 'id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['getById'],
			},
		},
		default: 0,
		required: true,
		description: 'The ID of the asset to retrieve',
	},
	{
		displayName: 'Additional Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['getById'],
			},
		},
		options: [
			{
				displayName: 'Asset Type ID',
				name: 'assettype_id',
				type: 'number',
				default: 0,
				description: 'Asset type ID filter',
			},
			{
				displayName: 'Include Activity',
				name: 'includeactivity',
				type: 'boolean',
				default: false,
				description: 'Whether to include activity details in the response',
			},
			{
				displayName: 'Include Allowed Status',
				name: 'includeallowedstatus',
				type: 'boolean',
				default: false,
				description: 'Whether to include allowed statuses details in the response',
			},
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include extra objects in the response',
			},
			{
				displayName: 'Include Diagram Details',
				name: 'includediagramdetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include diagram details in the response',
			},
			{
				displayName: 'Include Hierarchy',
				name: 'includehierarchy',
				type: 'boolean',
				default: false,
				description: 'Whether to include hierarchy details in the response',
			},
		],
	},
];