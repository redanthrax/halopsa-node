import { INodeProperties } from 'n8n-workflow';

export const createImageDescription: INodeProperties[] = [
	{
		displayName: 'Query Parameters',
		name: 'queryParameters',
		type: 'json',
		displayOptions: { show: { resource: ['attachments'], operation: ['createImage'] } },
		default: {},
		description: 'Query string parameters for POST /Attachment/image (e.g. ticket_id, atblob, atguid)',
	},
];
