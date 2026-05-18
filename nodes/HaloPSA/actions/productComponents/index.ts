import * as create from './create';
import * as deleteComponent from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteComponent as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['productComponents'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a product component' },
			{ name: 'Delete', value: 'delete', action: 'Delete a product component' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a product component by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many product components' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteComponent.description,
];
