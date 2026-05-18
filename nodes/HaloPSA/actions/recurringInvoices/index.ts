import * as create from './create';
import * as deleteRecurringInvoice from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteRecurringInvoice as delete, getAll, getById, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['recurringInvoices'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a recurring invoice' },
			{ name: 'Delete', value: 'delete', action: 'Delete a recurring invoice' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a recurring invoice by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many recurring invoices' },
			{ name: 'Update', value: 'update', action: 'Update a recurring invoice' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteRecurringInvoice.description,
];
