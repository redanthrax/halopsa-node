import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['externalChatMessage'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many External Chat Message' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID External Chat Message' },
			{ name: 'Create', value: 'create', action: 'Create External Chat Message' },
			{ name: 'Delete', value: 'delete', action: 'Delete External Chat Message' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
