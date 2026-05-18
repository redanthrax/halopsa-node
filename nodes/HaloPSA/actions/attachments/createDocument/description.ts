import { INodeProperties } from 'n8n-workflow';

export const createDocumentDescription: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'json',
		displayOptions: { show: { resource: ['attachments'], operation: ['createDocument'] } },
		default: {},
		description: 'Attachment object or array of Attachment objects sent to POST /Attachment/document',
	},
];
