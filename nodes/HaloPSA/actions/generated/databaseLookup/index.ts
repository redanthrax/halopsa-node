import * as run from './run';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { run, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['databaseLookup'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Database Lookup' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Database Lookup' },
			{ name: 'Create', value: 'create', action: 'Create Database Lookup' },
			{ name: 'Delete', value: 'delete', action: 'Delete Database Lookup' },
			{ name: 'run', value: 'run', action: 'run Database Lookup' },
		],
		default: 'getAll',
	},
	...run.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
