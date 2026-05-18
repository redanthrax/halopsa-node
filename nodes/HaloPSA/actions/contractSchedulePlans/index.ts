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
			{ name: 'Create', value: 'create', action: 'Create a ContractSchedulePlan' },
			{ name: 'Delete', value: 'delete', action: 'Delete a ContractSchedulePlan' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a ContractSchedulePlan by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many ContractSchedulePlans' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteContractSchedulePlan.description,
];
