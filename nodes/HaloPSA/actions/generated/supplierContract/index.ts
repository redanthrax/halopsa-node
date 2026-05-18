import * as nextRef from './nextRef';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { nextRef, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['supplierContract'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Supplier Contract' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Supplier Contract' },
			{ name: 'Create', value: 'create', action: 'Create Supplier Contract' },
			{ name: 'Delete', value: 'delete', action: 'Delete Supplier Contract' },
			{ name: 'NextRef', value: 'nextRef', action: 'NextRef Supplier Contract' },
		],
		default: 'getAll',
	},
	...nextRef.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
