import * as create from './create';
import * as deleteOp from './delete';
import * as favourite from './favourite';
import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteOp as delete, favourite, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['cannedText'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a canned text' },
			{ name: 'Delete', value: 'delete', action: 'Delete a canned text' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a canned text by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many canned texts' },
			{ name: 'Favourite', value: 'favourite', action: 'Update canned text favourites' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
	...favourite.description,
];
