import { INodeProperties } from 'n8n-workflow';

export const updateDescription: INodeProperties[] = [
	{
		displayName: 'Field Info Data',
		name: 'fieldInfoData',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['fieldInfo'],
				operation: ['update'],
			},
		},
		default: '{}',
		required: true,
		description: 'JSON data for the field info to update (must include ID field)',
	},
];