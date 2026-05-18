import * as unsubscribe from './unsubscribe';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { unsubscribe, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['service'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Service' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Service' },
			{ name: 'Create', value: 'create', action: 'Create Service' },
			{ name: 'Delete', value: 'delete', action: 'Delete Service' },
			{ name: 'unsubscribe', value: 'unsubscribe', action: 'unsubscribe Service' },
		],
		default: 'getAll',
	},
	...unsubscribe.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
