import * as migrate from './migrate';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { migrate, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['itemAccountsLink'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Item Accounts Link' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID Item Accounts Link' },
			{ name: 'Create', value: 'create', action: 'Create Item Accounts Link' },
			{ name: 'Delete', value: 'delete', action: 'Delete Item Accounts Link' },
			{ name: 'Migrate', value: 'migrate', action: 'Migrate Item Accounts Link' },
		],
		default: 'getAll',
	},
	...migrate.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
