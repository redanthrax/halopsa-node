import * as create from './create';
import * as deleteAttachment from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as getS3PresignedUrl from './getS3PresignedUrl';
import * as presignedUploadComplete from './presignedUploadComplete';

import { INodeProperties } from 'n8n-workflow';

export {
	create,
	deleteAttachment as delete,
	getAll,
	getById,
	getS3PresignedUrl,
	presignedUploadComplete,
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['attachments'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Upload an attachment',
				action: 'Create an attachment',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an attachment',
				action: 'Delete an attachment',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Download or get attachment metadata',
				action: 'Get an attachment by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'List attachments',
				action: 'Get many attachments',
			},
			{
				name: 'Get S3 Presigned URL',
				value: 'getS3PresignedUrl',
				description: 'Get S3 presigned upload URL',
				action: 'Get S3 presigned URL',
			},
			{
				name: 'Presigned Upload Complete',
				value: 'presignedUploadComplete',
				description: 'Complete presigned S3 upload',
				action: 'Complete presigned upload',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteAttachment.description,
	...getS3PresignedUrl.description,
	...presignedUploadComplete.description,
];
