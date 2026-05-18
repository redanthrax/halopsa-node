import { INodeProperties } from 'n8n-workflow';

export const presignedUploadCompleteDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['attachments'], operation: ['presignedUploadComplete'] } },
		default: {}, description: 'Mark presigned upload complete (PresignedURLRequest JSON in a single-element array)' },
];
