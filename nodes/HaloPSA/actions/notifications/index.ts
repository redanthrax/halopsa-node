import * as create from './create';
import * as deleteOp from './delete';
import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteOp as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['notifications'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a notification' },
			{ name: 'Delete', value: 'delete', action: 'Delete a notification' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a notification by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many notifications' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
