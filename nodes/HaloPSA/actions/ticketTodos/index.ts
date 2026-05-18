import * as create from './create';
import * as getAll from './getAll';

import { INodeProperties } from 'n8n-workflow';

export { create, getAll };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['ticketTodos'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a ticket to-do item' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many ticket to-do items' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...create.description,
];
