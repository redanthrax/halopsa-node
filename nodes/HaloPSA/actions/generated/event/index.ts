import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['event'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Event' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Event' },
			{ name: 'Create', value: 'create', action: 'Create Event' },
			{ name: 'Delete', value: 'delete', action: 'Delete Event' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
