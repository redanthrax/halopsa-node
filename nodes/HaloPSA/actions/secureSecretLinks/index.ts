import * as create from './create';
import * as deleteLink from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as validate from './validate';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteLink as delete, getAll, getById, validate };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['secureSecretLinks'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a secure secret link' },
			{ name: 'Delete', value: 'delete', action: 'Delete a secure secret link' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a secure secret link by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many secure secret links' },
			{ name: 'Validate', value: 'validate', action: 'Validate a secure secret link' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteLink.description,
	...validate.description,
];
