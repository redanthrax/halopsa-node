import * as create from './create';
import * as deleteSupplier from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteSupplier as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['suppliers'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a supplier' },
			{ name: 'Delete', value: 'delete', action: 'Delete a supplier' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a supplier by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many suppliers' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteSupplier.description,
];
