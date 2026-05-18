import * as create from './create';
import * as deleteContract from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteContract as delete, getAll, getById, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['contracts'],
			},
		},
		options: [
			{ name: 'Create', value: 'create', action: 'Create a client contract' },
			{ name: 'Delete', value: 'delete', action: 'Delete a client contract' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a client contract by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many client contracts' },
			{ name: 'Update', value: 'update', action: 'Update a client contract' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteContract.description,
];
