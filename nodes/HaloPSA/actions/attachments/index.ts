import * as create from './create';
import * as deleteAttachment from './delete';
import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteAttachment as delete, getAll, getById };

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
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteAttachment.description,
];
