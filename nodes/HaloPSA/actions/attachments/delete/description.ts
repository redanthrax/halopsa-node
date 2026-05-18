import { INodeProperties } from 'n8n-workflow';

export const deleteDescription: INodeProperties[] = [
	{
		displayName: 'Attachment ID',
		name: 'attachmentId',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				resource: ['attachments'],
				operation: ['delete'],
			},
		},
		default: 0,
		description: 'The attachment record ID to delete',
	},
];
