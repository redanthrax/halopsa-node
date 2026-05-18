import * as b from './b';
import * as r from './r';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { b, r, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['mO'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many MO' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID MO' },
			{ name: 'Create', value: 'create', action: 'Create MO' },
			{ name: 'Delete', value: 'delete', action: 'Delete MO' },
			{ name: 'b', value: 'b', action: 'b MO' },
			{ name: 'r', value: 'r', action: 'r MO' },
		],
		default: 'getAll',
	},
	...b.description,
	...r.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
