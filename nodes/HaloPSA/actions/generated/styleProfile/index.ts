import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['styleProfile'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Style Profile' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Style Profile' },
			{ name: 'Create', value: 'create', action: 'Create Style Profile' },
			{ name: 'Delete', value: 'delete', action: 'Delete Style Profile' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
