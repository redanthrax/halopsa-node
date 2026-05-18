import * as read from './read';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { read, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['haloNews'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Halo News' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Halo News' },
			{ name: 'Create', value: 'create', action: 'Create Halo News' },
			{ name: 'Delete', value: 'delete', action: 'Delete Halo News' },
			{ name: 'read', value: 'read', action: 'read Halo News' },
		],
		default: 'getAll',
	},
	...read.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
