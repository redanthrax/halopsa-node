import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['integrationError'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Integration Error' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Integration Error' },
			{ name: 'Create', value: 'create', action: 'Create Integration Error' },
			{ name: 'Delete', value: 'delete', action: 'Delete Integration Error' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
