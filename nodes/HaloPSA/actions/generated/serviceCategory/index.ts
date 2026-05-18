import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['serviceCategory'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Service Category' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Service Category' },
			{ name: 'Create', value: 'create', action: 'Create Service Category' },
			{ name: 'Delete', value: 'delete', action: 'Delete Service Category' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
