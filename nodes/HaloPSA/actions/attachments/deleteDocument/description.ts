import { INodeProperties } from 'n8n-workflow';

export const deleteDocumentDescription: INodeProperties[] = [
	{
		displayName: 'Document ID',
		name: 'documentId',
		type: 'number',
		required: true,
		displayOptions: { show: { resource: ['attachments'], operation: ['deleteDocument'] } },
		default: 0,
		description: 'ID of the attachment document to delete',
	},
];
