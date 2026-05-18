import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['contactgroupcontact'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Contactgroupcontact' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Contactgroupcontact' },
			{ name: 'Create', value: 'create', action: 'Create Contactgroupcontact' },
			{ name: 'Delete', value: 'delete', action: 'Delete Contactgroupcontact' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
