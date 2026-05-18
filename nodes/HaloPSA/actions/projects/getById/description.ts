import { INodeProperties } from 'n8n-workflow';
import { optionsJsonProperty } from '../../../filterParameters';

export const description: INodeProperties[] = [
	{
		displayName: 'Project ID',
		name: 'projectId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['projects'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'The ID of the project to retrieve',
	},
	{
		displayName: 'Additional Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: {
				resource: ['projects'],
				operation: ['getById'],
			},
		},
		options: [
			{
				displayName: 'Include Attachments',
				name: 'includeattachments',
				type: 'boolean',
				default: false,
				description: 'Whether to include attachment details in the response',
			},
			{
				displayName: 'Include Custom Fields',
				name: 'includecustomfields',
				type: 'boolean',
				default: false,
				description: 'Whether to include custom fields in the response',
			},
			{
				displayName: 'Include Details',
				name: 'includedetails',
				type: 'boolean',
				default: false,
				description: 'Whether to include extra objects in the response',
			},
		],
	},
	optionsJsonProperty('projects', 'getById'),
];