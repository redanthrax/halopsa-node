import * as create from './create';
import * as deleteDetail from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteDetail as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['raynetDetails'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a raynet detail' },
			{ name: 'Delete', value: 'delete', action: 'Delete a raynet detail' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a raynet detail by id' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many raynet details' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteDetail.description,
];
