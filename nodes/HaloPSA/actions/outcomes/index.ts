import * as create from './create';
import * as deleteOutcome from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteOutcome as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['outcomes'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create an outcome' },
			{ name: 'Delete', value: 'delete', action: 'Delete an outcome' },
			{ name: 'Get by ID', value: 'getById', action: 'Get an outcome by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many outcomes' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOutcome.description,
];
