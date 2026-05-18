import { INodeProperties } from 'n8n-workflow';

export const getS3PresignedUrlDescription: INodeProperties[] = [
	{ displayName: 'Additional Fields', name: 'additionalFields', type: 'json',
		displayOptions: { show: { resource: ['attachments'], operation: ['getS3PresignedUrl'] } },
		default: {}, description: 'Request S3 presigned upload URL (PresignedURLRequest JSON in a single-element array)' },
];
