import * as create from './create';
import * as deleteRecurringInvoice from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';
import * as updateLines from './updateLines';
import * as processRecurring from './process';
import * as addLines from './addLines';

import { INodeProperties } from 'n8n-workflow';

export {
	addLines,
	create,
	deleteRecurringInvoice as delete,
	getAll,
	getById,
	processRecurring as process,
	update,
	updateLines,
};

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['recurringInvoices'] } },
		options: [
			{ name: 'Add Lines', value: 'addLines', action: 'Add recurring invoice lines' },
			{ name: 'Create', value: 'create', action: 'Create a recurring invoice' },
			{ name: 'Delete', value: 'delete', action: 'Delete a recurring invoice' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a recurring invoice by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many recurring invoices' },
			{ name: 'Process', value: 'process', action: 'Process recurring invoices' },
			{ name: 'Update', value: 'update', action: 'Update a recurring invoice' },
			{ name: 'Update Lines', value: 'updateLines', action: 'Update recurring invoice lines' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...updateLines.description,
	...addLines.description,
	...processRecurring.description,
	...deleteRecurringInvoice.description,
];
