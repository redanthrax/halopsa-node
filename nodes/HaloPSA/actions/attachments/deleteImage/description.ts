import { INodeProperties } from 'n8n-workflow';

export const deleteImageDescription: INodeProperties[] = [
	{
		displayName: 'Image ID',
		name: 'imageId',
		type: 'string',
		required: true,
		displayOptions: { show: { resource: ['attachments'], operation: ['deleteImage'] } },
		default: '',
		description: 'UUID of the attachment image to delete',
	},
];
