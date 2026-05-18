import * as create from './create';
import * as deletePayment from './delete';
import * as getAll from './getAll';
import * as getById from './getById';

import { INodeProperties } from 'n8n-workflow';

export { create, deletePayment as delete, getAll, getById };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation', name: 'operation', type: 'options', noDataExpression: true,
		displayOptions: { show: { resource: ['invoicePayments'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create an invoice payment' },
			{ name: 'Delete', value: 'delete', action: 'Delete an invoice payment' },
			{ name: 'Get by ID', value: 'getById', action: 'Get an invoice payment by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many invoice payments' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...deletePayment.description,
];
