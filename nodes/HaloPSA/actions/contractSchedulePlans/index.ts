import * as create from './create';
import * as deleteContractSchedulePlan from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteContractSchedulePlan as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['contractSchedulePlans'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a contract schedule plan' },
			{ name: 'Delete', value: 'delete', action: 'Delete a contract schedule plan' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a contract schedule plan by id' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many contract schedule plans' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteContractSchedulePlan.description,
];
