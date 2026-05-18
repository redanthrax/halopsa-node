import * as create from './create';
import * as deleteContractRule from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteContractRule as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['contractRules'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a ContractRule' },
			{ name: 'Delete', value: 'delete', action: 'Delete a ContractRule' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a ContractRule by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many ContractRules' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteContractRule.description,
];
