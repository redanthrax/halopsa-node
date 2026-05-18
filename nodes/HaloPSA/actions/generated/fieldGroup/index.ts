import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['fieldGroup'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Field Group' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Field Group' },
			{ name: 'Create', value: 'create', action: 'Create Field Group' },
			{ name: 'Delete', value: 'delete', action: 'Delete Field Group' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
