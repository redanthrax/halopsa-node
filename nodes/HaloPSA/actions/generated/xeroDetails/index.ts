import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['xeroDetails'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Xero Details' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Xero Details' },
			{ name: 'Create', value: 'create', action: 'Create Xero Details' },
			{ name: 'Delete', value: 'delete', action: 'Delete Xero Details' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
