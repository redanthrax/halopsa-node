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
		displayOptions: { show: { resource: ['holidays'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a holiday' },
			{ name: 'Delete', value: 'delete', action: 'Delete a holiday' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a holiday by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many holidays' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
