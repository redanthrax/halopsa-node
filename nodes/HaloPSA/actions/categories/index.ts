import * as create from './create';
import * as deleteCategory from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteCategory as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['categories'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a category' },
			{ name: 'Delete', value: 'delete', action: 'Delete a category' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a category by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many categorys' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteCategory.description,
];
