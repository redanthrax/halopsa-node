import { INodeProperties } from 'n8n-workflow';

export const getByIdDescription: INodeProperties[] = [
	{
		displayName: 'Attachment ID',
		name: 'attachmentId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['getById'],
			},
		},
		default: 0,
		description: 'The attachment record ID',
	},
	{
		displayName: 'Include Details',
		name: 'includeDetails',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['getById'],
			},
		},
		default: false,
		description: 'Whether to include extra objects in the response',
	},
];
