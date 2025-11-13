import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Asset Type Name or ID',
		name: 'assettype_id',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getAssetTypes',
		},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		default: '',
		required: true,
		description: 'The asset type for the new asset. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Client ID',
		name: 'client_id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		default: 0,
		required: true,
		description: 'The client ID that owns this asset',
	},
	{
		displayName: 'Site ID',
		name: 'site_id',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		default: 0,
		description: 'The site ID where this asset is located',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		options: [
			{
				displayName: 'Business Owner ID',
				name: 'business_owner_id',
				type: 'number',
				default: 0,
				description: 'The business owner user ID',
			},
			{
				displayName: 'Contract ID',
				name: 'contract_id',
				type: 'number',
				default: -1,
				description: 'The contract ID associated with this asset',
			},
			{
				displayName: 'Contract Ref',
				name: 'contract_ref',
				type: 'string',
				default: '',
				description: 'The contract reference',
			},
			{
				displayName: 'Criticality',
				name: 'criticality',
				type: 'number',
				default: 0,
				description: 'The criticality level of the asset',
			},
			{
				displayName: 'Device Number',
				name: 'device_number',
				type: 'number',
				default: 1,
			},
			{
				displayName: 'Inactive',
				name: 'inactive',
				type: 'boolean',
				default: false,
				description: 'Whether the asset is inactive',
			},
			{
				displayName: 'Inventory Number',
				name: 'inventory_number',
				type: 'string',
				default: '',
				description: 'The inventory number for the asset',
			},
			{
				displayName: 'Is Template',
				name: 'is_template',
				type: 'boolean',
				default: false,
				description: 'Whether this asset is a template',
			},
			{
				displayName: 'Item ID',
				name: 'item_id',
				type: 'number',
				default: 0,
				description: 'The item ID from inventory',
			},
			{
				displayName: 'Key Field',
				name: 'key_field',
				type: 'string',
				default: '',
				description: 'Primary key field value',
			},
			{
				displayName: 'Key Field 2',
				name: 'key_field2',
				type: 'string',
				default: '',
				description: 'Secondary key field value',
			},
			{
				displayName: 'Key Field 3',
				name: 'key_field3',
				type: 'string',
				default: '',
				description: 'Tertiary key field value',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				typeOptions: {
					alwaysOpenEditWindow: true,
				},
				default: '',
				description: 'Notes about the asset',
			},
			{
				displayName: 'Priority ID',
				name: 'priority_id',
				type: 'number',
				default: 0,
				description: 'The priority ID for the asset',
			},
			{
				displayName: 'SLA ID',
				name: 'sla_id',
				type: 'number',
				default: -1,
				description: 'The SLA ID for the asset',
			},
			{
				displayName: 'Status ID',
				name: 'status_id',
				type: 'number',
				default: 1,
				description: 'The status ID of the asset',
			},
			{
				displayName: 'Supplier Contract ID',
				name: 'supplier_contract_id',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Supplier ID',
				name: 'supplier_id',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Technical Owner ID',
				name: 'technical_owner_id',
				type: 'number',
				default: 0,
				description: 'The technical owner user ID',
			},
			{
				displayName: 'Third Party ID',
				name: 'third_party_id',
				type: 'number',
				default: 0,
				description: 'Third party integration ID',
			},
			{
				displayName: 'Use',
				name: 'use',
				type: 'options',
				options: [
					{
						name: 'Asset',
						value: 'asset',
					},
					{
						name: 'Configuration Item',
						value: 'ci',
					},
				],
				default: 'asset',
				description: 'The use type of the asset',
			},
			{
				displayName: 'User ID',
				name: 'user_id',
				type: 'number',
				default: 0,
				description: 'The user ID assigned to this asset',
			},
		],
	},
	{
		displayName: 'Asset Type (For Fields) Name or ID',
		name: 'assettype_id_for_fields',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getAssetTypes',
		},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The asset type - required to load available fields for this asset type. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Field Items',
		name: 'fieldItems',
		type: 'fixedCollection',
		placeholder: 'Add Field Item',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['create'],
			},
		},
		default: {},
		description: 'Custom field values to set for this asset',
		options: [
			{
				name: 'fieldItem',
				displayName: 'Field Item',
				values: [
					{
						displayName: 'Field Name or ID',
						name: 'field',
						type: 'options',
						typeOptions: {
							loadOptionsDependsOn: ['assettype_id_for_fields'],
							loadOptionsMethod: 'getAssetFields',
						},
						default: '',
						description: 'The custom field to set. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'The value to set for this field',
					},
				],
			},
		],
	},
];
