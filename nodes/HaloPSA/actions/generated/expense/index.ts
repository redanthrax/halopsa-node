import * as getAll from './getAll';
import * as create from './create';
import { INodeProperties } from 'n8n-workflow';

export { getAll, create };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['expense'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many Expense' },
			{ name: 'Create', value: 'create', action: 'Create Expense' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...create.description,
];
