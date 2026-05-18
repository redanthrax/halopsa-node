import * as create from './create';
import * as deleteRule from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import { INodeProperties } from 'n8n-workflow';

export { create, deleteRule as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['approvalProcessRules'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a approval process rule' },
			{ name: 'Delete', value: 'delete', action: 'Delete a approval process rule' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a approval process rule by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many approval process rules' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteRule.description,
];
