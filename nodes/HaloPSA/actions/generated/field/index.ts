import * as addFieldToAll from './addFieldToAll';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { addFieldToAll, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['field'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Field' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Field' },
			{ name: 'Create', value: 'create', action: 'Create Field' },
			{ name: 'Delete', value: 'delete', action: 'Delete Field' },
			{ name: 'addFieldToAll', value: 'addFieldToAll', action: 'addFieldToAll Field' },
		],
		default: 'getAll',
	},
	...addFieldToAll.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
