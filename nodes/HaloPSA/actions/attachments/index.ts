import * as create from './create';
import * as createDocument from './createDocument';
import * as createImage from './createImage';
import * as deleteAttachment from './delete';
import * as deleteDocument from './deleteDocument';
import * as deleteImage from './deleteImage';
import * as getAll from './getAll';
import * as getById from './getById';
import * as getDocument from './getDocument';
import * as getImage from './getImage';
import * as getImageByToken from './getImageByToken';
import * as getS3PresignedUrl from './getS3PresignedUrl';
import * as presignedUploadComplete from './presignedUploadComplete';

import { INodeProperties } from 'n8n-workflow';

export {
	create,
	createDocument,
	createImage,
	deleteAttachment as delete,
	deleteDocument,
	deleteImage,
	getAll,
	getById,
	getDocument,
	getImage,
	getImageByToken,
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
			{
				name: 'Get Image',
				value: 'getImage',
				description: 'Get an attachment image by UUID',
				action: 'Get attachment image',
			},
			{
				name: 'Get Image by Token',
				value: 'getImageByToken',
				description: 'Get an attachment image using token and nonce',
				action: 'Get attachment image by token',
			},
			{
				name: 'Delete Image',
				value: 'deleteImage',
				description: 'Delete an attachment image by UUID',
				action: 'Delete attachment image',
			},
			{
				name: 'Get Document',
				value: 'getDocument',
				description: 'Get an attachment document by ID',
				action: 'Get attachment document',
			},
			{
				name: 'Delete Document',
				value: 'deleteDocument',
				description: 'Delete an attachment document by ID',
				action: 'Delete attachment document',
			},
			{
				name: 'Create Document',
				value: 'createDocument',
				description: 'Create an attachment document',
				action: 'Create attachment document',
			},
			{
				name: 'Create Image',
				value: 'createImage',
				description: 'Upload an inline image via query parameters',
				action: 'Create attachment image',
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
	...getImage.description,
	...getImageByToken.description,
	...deleteImage.description,
	...getDocument.description,
	...deleteDocument.description,
	...createDocument.description,
	...createImage.description,
];
