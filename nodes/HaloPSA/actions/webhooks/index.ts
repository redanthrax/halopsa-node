import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteWebhook from './delete';
import * as execute from './execute';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteWebhook as delete, execute };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['webhooks'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new webhook',
				action: 'Create a webhook',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete a webhook',
				action: 'Delete a webhook',
			},
			{
				name: 'Execute Runbook',
				value: 'execute',
				description: 'Execute a webhook/runbook',
				action: 'Execute a webhook runbook',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get a webhook by ID',
				action: 'Get a webhook by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many webhooks',
				action: 'Get many webhooks',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a webhook',
				action: 'Update a webhook',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteWebhook.description,
	...execute.description,
];