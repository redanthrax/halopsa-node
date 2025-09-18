import { INodeProperties } from 'n8n-workflow';

export const createDescription: INodeProperties[] = [
	{
		displayName: 'Field Info Data',
		name: 'fieldInfoData',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['fieldInfo'],
				operation: ['create'],
			},
		},
		default: '{}',
		required: true,
		description: 'JSON data for the field info to create',
	},
];