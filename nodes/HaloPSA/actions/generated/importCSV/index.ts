import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['importCSV'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Import CSV' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Import CSV' },
			{ name: 'Create', value: 'create', action: 'Create Import CSV' },
			{ name: 'Delete', value: 'delete', action: 'Delete Import CSV' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
