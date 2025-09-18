import type { INodeProperties } from 'n8n-workflow';

import { execute as getAll } from './getAll/execute';
import { execute as getById } from './getById/execute';
import { execute as create } from './create/execute';
import { execute as update } from './update/execute';
import { execute as del } from './delete/execute';

import { description as getAllDescription } from './getAll/description';
import { description as getByIdDescription } from './getById/description';
import { description as createDescription } from './create/description';
import { description as updateDescription } from './update/description';
import { description as deleteDescription } from './delete/description';

export { getAll, getById, create, update, del };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webhookEvents'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a webhook event',
				action: 'Create a webhook event',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a webhook event',
				action: 'Delete a webhook event',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a webhook event by ID',
				action: 'Get a webhook event by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many webhook events',
				action: 'Get many webhook events',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a webhook event',
				action: 'Update a webhook event',
			},
		],
		default: 'getAll',
	},
	...getAllDescription,
	...getByIdDescription,
	...createDescription,
	...updateDescription,
	...deleteDescription,
];
