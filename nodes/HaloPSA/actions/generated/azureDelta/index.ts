import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['azureDelta'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Azure Delta' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Azure Delta' },
			{ name: 'Create', value: 'create', action: 'Create Azure Delta' },
			{ name: 'Delete', value: 'delete', action: 'Delete Azure Delta' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
