import { INodeProperties } from 'n8n-workflow';

export const getAssetTypesDescription: INodeProperties[] = [
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['getAssetTypes'],
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
				resource: ['assets'],
				operation: ['getAssetTypes'],
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
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['getAssetTypes'],
			},
		},
		options: [
			{
				displayName: 'Active Only',
				name: 'activeonly',
				type: 'boolean',
				default: false,
				description: 'Whether to include only active asset types',
			},
			{
				displayName: 'Asset Type ID',
				name: 'id',
				type: 'number',
				default: 0,
				description: 'Filter by specific asset type ID',
			},
			{
				displayName: 'Fields and Layout Only',
				name: 'fieldsandlayoutonly',
				type: 'boolean',
				default: false,
				description: 'Whether to include only fields and layout information',
			},
			{
				displayName: 'Include Type Restrictions',
				name: 'includetyperestrictions',
				type: 'boolean',
				default: false,
				description: 'Whether to include type restrictions in the response',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Filters response based on the search string',
			},
		],
	},
];
