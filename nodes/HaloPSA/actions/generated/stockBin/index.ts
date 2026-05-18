import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['stockBin'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Stock Bin' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Stock Bin' },
			{ name: 'Create', value: 'create', action: 'Create Stock Bin' },
			{ name: 'Delete', value: 'delete', action: 'Delete Stock Bin' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
