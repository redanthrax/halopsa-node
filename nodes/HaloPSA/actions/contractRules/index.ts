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
			{ name: 'Create', value: 'create', action: 'Create a contract rule' },
			{ name: 'Delete', value: 'delete', action: 'Delete a contract rule' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a contract rule by id' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many contract rules' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteContractRule.description,
];
