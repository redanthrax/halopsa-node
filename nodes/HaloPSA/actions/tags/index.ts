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
		displayOptions: { show: { resource: ['tags'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a tag' },
			{ name: 'Delete', value: 'delete', action: 'Delete a tag' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a tag by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many tags' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
