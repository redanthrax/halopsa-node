import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['configCommit'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Config Commit' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Config Commit' },
			{ name: 'Create', value: 'create', action: 'Create Config Commit' },
			{ name: 'Delete', value: 'delete', action: 'Delete Config Commit' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
