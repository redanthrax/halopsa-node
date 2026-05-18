import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['viewListGroup'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many View List Group' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID View List Group' },
			{ name: 'Create', value: 'create', action: 'Create View List Group' },
			{ name: 'Delete', value: 'delete', action: 'Delete View List Group' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
