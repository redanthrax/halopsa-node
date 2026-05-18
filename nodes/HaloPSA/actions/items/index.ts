import * as create from './create';
import * as deleteItem from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteItem as delete, getAll, getById, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['items'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create an item' },
			{ name: 'Delete', value: 'delete', action: 'Delete an item' },
			{ name: 'Get by ID', value: 'getById', action: 'Get an item by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many items' },
			{ name: 'Update', value: 'update', action: 'Update an item' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteItem.description,
];
