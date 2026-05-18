import { INodeProperties } from 'n8n-workflow';

export const getImageDescription: INodeProperties[] = [
	{
		displayName: 'Image ID',
		name: 'imageId',
		type: 'string',
		required: true,
		displayOptions: { show: { resource: ['attachments'], operation: ['getImage'] } },
		default: '',
		description: 'UUID of the attachment image',
	},
];
