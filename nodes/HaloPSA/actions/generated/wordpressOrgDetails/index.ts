import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['wordpressOrgDetails'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Wordpress Org Details' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Wordpress Org Details' },
			{ name: 'Create', value: 'create', action: 'Create Wordpress Org Details' },
			{ name: 'Delete', value: 'delete', action: 'Delete Wordpress Org Details' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
