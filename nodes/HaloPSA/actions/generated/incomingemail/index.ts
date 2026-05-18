import * as addToTicket from './addToTicket';
import * as getAll from './getAll';
import * as getById from './getById';
import * as create from './create';
import * as deleteOp from './delete';
import { INodeProperties } from 'n8n-workflow';

export { addToTicket, getAll, getById, create, deleteOp as delete };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['incomingemail'] } },
		options: [
			{ name: 'Get Many', value: 'getAll', action: 'Get Many incomingemail' },
			{ name: 'Get by ID', value: 'getById', action: 'Get by ID incomingemail' },
			{ name: 'Create', value: 'create', action: 'Create incomingemail' },
			{ name: 'Delete', value: 'delete', action: 'Delete incomingemail' },
			{ name: 'AddToTicket', value: 'addToTicket', action: 'AddToTicket incomingemail' },
		],
		default: 'getAll',
	},
	...addToTicket.description,
	...getAll.description,
	...getById.description,
	...create.description,
	...deleteOp.description,
];
