import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as update from './update';
import * as deleteAction from './delete';

import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, update, deleteAction as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['actions'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a new action',
				action: 'Create an action',
			},
			{
				name: 'Delete',
				value: 'delete',
				description: 'Delete an action',
				action: 'Delete an action',
			},
			{
				name: 'Get by ID',
				value: 'getById',
				description: 'Get an action by ID',
				action: 'Get an action by ID',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Get many actions',
				action: 'Get many actions',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update an action',
				action: 'Update an action',
			},
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteAction.description,
];