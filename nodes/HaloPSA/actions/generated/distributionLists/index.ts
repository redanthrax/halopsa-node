import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['distributionLists'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Distribution Lists' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Distribution Lists' },
			{ name: 'Create', value: 'create', action: 'Create Distribution Lists' },
			{ name: 'Delete', value: 'delete', action: 'Delete Distribution Lists' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
