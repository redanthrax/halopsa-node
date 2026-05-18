import * as create from './create';
import * as deleteSalesOrder from './delete';
import * as getAll from './getAll';
import * as getById from './getById';
import * as update from './update';

import { INodeProperties } from 'n8n-workflow';

export { create, deleteSalesOrder as delete, getAll, getById, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['salesOrders'] } },
		options: [
			{ name: 'Create', value: 'create', action: 'Create a sales order' },
			{ name: 'Delete', value: 'delete', action: 'Delete a sales order' },
			{ name: 'Get by ID', value: 'getById', action: 'Get a sales order by ID' },
			{ name: 'Get Many', value: 'getAll', action: 'Get many sales orders' },
			{ name: 'Update', value: 'update', action: 'Update a sales order' },
		],
		default: 'getAll',
	},
	...getAll.description,
	...getById.description,
	...create.description,
	...update.description,
	...deleteSalesOrder.description,
];
