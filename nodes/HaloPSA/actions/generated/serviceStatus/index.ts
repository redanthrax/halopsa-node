import * as subscribe from './subscribe';
import * as subscribe2 from './subscribe2';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { subscribe, subscribe2, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['serviceStatus'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Service Status' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Service Status' },
			{ name: 'Create', value: 'create', action: 'Create Service Status' },
			{ name: 'Delete', value: 'delete', action: 'Delete Service Status' },
			{ name: 'subscribe', value: 'subscribe', action: 'subscribe Service Status' },
			{ name: 'Subscribe', value: 'subscribe2', action: 'Subscribe Service Status' },
		],
		default: 'getAll',
	},
	...subscribe.description,
	...subscribe2.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
