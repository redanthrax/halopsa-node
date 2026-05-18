import { INodeProperties } from 'n8n-workflow';

export const getDocumentDescription: INodeProperties[] = [
	{
		displayName: 'Document ID',
		name: 'documentId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['attachments'], operation: ['getDocument'] } },
		default: 0,
		description: 'ID of the attachment document',
	},
];
